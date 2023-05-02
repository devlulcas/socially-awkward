import { useLoaderData } from 'react-router-dom';
import { apiClient } from '../../../shared/config';

export async function loader() {
  const user = await apiClient.user.getCurrentUser();

  return user.data;
}

export default function ProfilePage() {
  const data = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <div>
        <img
          className="h-24 aspect-square"
          src={data.avatar}
          alt="avatar"
          loading="lazy"
        />

        <h1 className="text-4xl font-bold">{data.username}</h1>
      </div>
    </div>
  );
}
