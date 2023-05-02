import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  useParams
} from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { apiClient } from '../../../shared/config';
import { Comment } from '../components/comment';
import { CreateCommentForm } from '../components/create-comment-form';

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('Post ID is required');
  }

  const [post, comments] = await Promise.all([
    apiClient.post.getPost(params.id),
    apiClient.post.comments.getCommentsFromPost(params.id),
  ]);

  const user = await apiClient.user.getCurrentUser().catch(() => null);

  return {
    post: post.data,
    comments: comments.data,
    user: user?.data,
  };
}

export default function PostPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const data = useLoaderData();

  if (!id || !data) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <Button
        as="button"
        className="mb-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>

      <div className="bg-primary-600 flex">
        <img
          loading="lazy"
          className="h-50 aspect-square"
          src={data.post.author.avatar}
          alt="avatar"
        />

        <article className="w-full flex flex-col justify-between">
          <h1 className="p-3 w-full text-4xl font-bold bg-primary-700">
            {data.post.title}
          </h1>

          <p className="p-3 w-full mt-1">{data.post.body}</p>

          <div className="p-3 flex gap-2 items-center">
            <p>
              {data.post.likes} <span className="text-primary-200">Likes</span>
            </p>
          </div>
        </article>
      </div>

      {data.user ? (
        <CreateCommentForm postId={id} />
      ) : (
        <p className="text-center mt-4">
          <Button as="a" to="/login" className="w-full" variant="primary">
            Login to comment
          </Button>
        </p>
      )}

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Comments</h2>

        <ul className="flex flex-col gap-2">
          {data.comments.map((comment) => (
            <li key={comment.id}>
              <Comment
                data={comment}
                isAuthor={comment.author.id === data.user?.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
