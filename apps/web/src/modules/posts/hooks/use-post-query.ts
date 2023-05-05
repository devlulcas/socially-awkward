import { useQuery } from 'react-query';
import { apiClient } from '../../../shared/config';

export const POST_QUERY_KEY = 'post';

export function usePostQuery(id?: string) {
  return useQuery({
    queryKey: [POST_QUERY_KEY, id],
    queryFn: async () => {
      if (!id) throw new Error('Bro! You need an ID here!');

      const post = await apiClient.getPost(id);

      return post.data;
    },
  });
}
