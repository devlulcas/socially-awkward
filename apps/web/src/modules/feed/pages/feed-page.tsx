import { CreatePostForm } from '../../posts/components/create-post-form';
import { Post } from '../../posts/components/post';
import { usePostsQuery } from '../../posts/hooks/use-posts-query';

export default function FeedPage() {
  const postsQuery = usePostsQuery();

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <h1 className="text-4xl font-bold py-4">Feed</h1>

      <CreatePostForm />

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
