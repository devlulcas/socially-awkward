import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { apiClient } from '../../../shared/config';
import { Post } from '../../posts/components/post';
import { CreatePostForm } from '../../posts/components/create-post-form';

export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData();

  const title = formData.get('title')?.toString();

  const body = formData.get('body')?.toString();

  if (!title || !body) {
    throw new Error('Title and body are required');
  }

  const post = await apiClient.post.createPost({title, body});

  return post.data;
}

export async function loader() {
  const posts = await apiClient.post.getPosts();

  return posts.data;
}

export default function FeedPage() {
  const data = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">


      <h1 className="text-4xl font-bold py-4">Feed</h1>

      <CreatePostForm/>

      <ul className="flex flex-col gap-2">
        {data.map((post) => (
          <li key={post.id}>
            <Post data={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
