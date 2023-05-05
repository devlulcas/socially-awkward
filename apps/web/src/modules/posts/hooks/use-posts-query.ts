import { useQuery } from 'react-query';
import { apiClient } from '../../../shared/config';
import { POST_QUERY_KEY } from './use-post-query';
import { PostOutput } from 'awkward-client';

export function usePostsQuery() {
  const sortPostsByDate = (a: PostOutput, b: PostOutput) => {
    const aCreatedAt = new Date(a.createdAt);
    const bCreatedAt = new Date(b.createdAt);
    return bCreatedAt.getTime() - aCreatedAt.getTime();
  };

  return useQuery({
    queryKey: [POST_QUERY_KEY],
    queryFn: apiClient.getPosts,
    select: (response) => {
      return response?.data.sort(sortPostsByDate);
    },
  });
}
