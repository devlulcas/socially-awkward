import { Button } from '../../../shared/components/button';
import { CreatePostForm } from '../../posts/components/create-post-form';
import { Post } from '../../posts/components/post';
import { usePostsQuery } from '../../posts/hooks/use-posts-query';
import { useProfileQuery } from '../../profile/hooks/use-profile-query';

export default function FeedPage() {
  const postsQuery = usePostsQuery();
  const profileQuery = useProfileQuery();

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <h1 className="text-4xl font-bold py-4">Feed</h1>

      {profileQuery.data?.id ? (
        <CreatePostForm />
      ) : (
        <div className='flex gap-2 items-center mb-2'>
          <p className="text-center">
            You need to be logged in to create a post.
          </p>

          <Button as='a' to="/login">
            Sign in / Sign up
          </Button>
        </div>
      )}

      <ul className="flex flex-col gap-2">
        {postsQuery.data?.map((post) => (
          <li key={post.id}>
            <Post data={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
