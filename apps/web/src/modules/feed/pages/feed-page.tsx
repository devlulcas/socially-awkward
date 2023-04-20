import { Post } from '../components/post';

export function FeedPage() {
  return (
    <div>
      <div className="max-w-5xl mx-auto pt-2 pb-4">
        <h1 className="text-4xl font-bold py-4">Feed</h1>

        <ul className="flex flex-col gap-2">
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </div>
    </div>
  );
}
