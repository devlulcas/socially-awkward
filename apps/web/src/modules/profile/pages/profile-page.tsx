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
    <div className="h-[92vh] grid place-items-center">
      <div className='flex items-center justify-center flex-col'>
        <img
          className="h-24 aspect-square rounded-full bg-primary-300"
          src={profileQuery.data.avatar}
          alt="avatar"
          loading="lazy"
        />

        <h1 className="text-4xl font-bold mt-2">{profileQuery.data.username}</h1>
      </div>
    </div>
  );
}
