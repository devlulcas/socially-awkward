import { useParams } from 'react-router-dom';
import { BackButton } from '../../../shared/components/back-button';
import { Button } from '../../../shared/components/button';
import { Comment } from '../../comments/components/comment';
import { CreateCommentForm } from '../../comments/components/create-comment-form';
import { useCommentsQuery } from '../../comments/hooks/use-comments-query';
import { useProfileQuery } from '../../profile/hooks/use-profile-query';
import { FeedbackButton } from '../components/feedback-button';
import { useDeletePostMutation } from '../hooks/use-delete-post-mutation';
import { usePostQuery } from '../hooks/use-post-query';

export default function PostPage() {
  const { id } = useParams();

  const postQuery = usePostQuery(id);

  const commentsQuery = useCommentsQuery(id);

  const profileQuery = useProfileQuery();

  const deletePostMutation = useDeletePostMutation();

  if (!id || !postQuery.data) {
    return null;
  }

  const isFromLoggedUser = postQuery.data.author.id === profileQuery.data?.id;

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <BackButton />
      <div className="bg-primary-600 flex">
        <img
          loading="lazy"
          className="w-24 aspect-square object-cover"
          src={postQuery.data.author.avatar}
          alt="avatar"
        />

        <article className="w-full flex flex-col justify-between">
          <h1 className="p-3 w-full text-4xl font-bold bg-primary-700">
            {postQuery.data.title}
          </h1>

          <p className="p-3 w-full mt-1">{postQuery.data.body}</p>

          <div className="p-3 flex gap-2 items-center">
            <FeedbackButton post={postQuery.data} />

            {isFromLoggedUser && (
              <Button
                as="button"
                onClick={() => {
                  deletePostMutation.mutate(id);
                }}
              >
                Delete post
              </Button>
            )}
          </div>
        </article>
      </div>

      {profileQuery.data?.id ? (
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
          {commentsQuery.data?.map((comment) => (
            <li key={comment.id}>
              <Comment
                data={comment}
                isAuthor={comment.author.id === profileQuery.data?.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
