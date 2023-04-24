import { Post } from "../../posts/components/post";

export function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <div>
        <img
          className="h-24 aspect-square"
          src="https://picsum.photos/500/500"
          alt="avatar"
        />

        <h1 className="text-4xl font-bold">John Doe</h1>
      </div>

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
  );
}
