import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { POST_QUERY_KEY } from './use-post-query';

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries([POST_QUERY_KEY]);
    },
  });
}
