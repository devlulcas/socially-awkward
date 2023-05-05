import { useQuery } from 'react-query';
import { apiClient } from '../../../shared/config';

export const COMMENTS_QUERY_KEY = 'comments';

export function useCommentsQuery(id?: string) {
  return useQuery({
    queryKey: [COMMENTS_QUERY_KEY, id],
    queryFn: async () => {
      if (!id) throw new Error('Bro! You need an ID here!');

      const comments = await apiClient.getCommentsFromPost(id);

      return comments.data;
    },
  });
}
