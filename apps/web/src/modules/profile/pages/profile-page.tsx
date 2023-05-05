import { useProfileQuery } from '../hooks/use-profile-query';

export default function ProfilePage() {
  const profileQuery = useProfileQuery();

  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (profileQuery.isError) {
    return <div>Something went wrong!</div>;
  }

  if (!profileQuery.data) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-4">
      <div>
        <img
          className="h-24 aspect-square"
          src={profileQuery.data.avatar}
          alt="avatar"
          loading="lazy"
        />

        <h1 className="text-4xl font-bold">{profileQuery.data.username}</h1>
      </div>
    </div>
  );
}
