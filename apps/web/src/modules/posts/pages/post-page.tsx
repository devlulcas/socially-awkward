import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { Comment } from '../components/comment';

export function PostPage() {
  const { id } = useParams();

  const navigate = useNavigate();

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
          src="https://picsum.photos/200/300"
          alt="avatar"
        />

        <article className="w-full flex flex-col justify-between">
          <h1 className="p-3 w-full text-4xl font-bold bg-primary-700">
            Lorem ipsum dolor sit.
          </h1>

          <p className="p-3 w-full mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>

          <div className="p-3 flex gap-2 items-center">
            <p>
              120 <span className="text-primary-200">Likes</span>
            </p>
            <p>
              20 <span className="text-primary-200">Comments</span>
            </p>
          </div>
        </article>
      </div>

      <form
        method="POST"
        action={`/posts/${id}/comments`}
        className="flex flex-col gap-2 my-4"
      >
        <textarea
          className="w-full p-2 border bg-primary-100 text-primary-900 border-primary-600 resize-none"
          name="comment"
          id="comment"
          placeholder="Write a comment..."
          cols={30}
          rows={3}
        ></textarea>

        <Button as="button" type="submit">
          Comment
        </Button>
      </form>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Comments</h2>

        <ul className="flex flex-col gap-2">
          <li>
            <Comment />
          </li>
          <li>
            <Comment />
          </li>
          <li>
            <Comment />
          </li>
          <li>
            <Comment />
          </li>
        </ul>
      </div>
    </div>
  );
}
