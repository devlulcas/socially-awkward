import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { COMMENTS_QUERY_KEY } from './use-comments-query';

export function useCreateCommentMutation(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: string) => {
      return apiClient.createCommentOnPost({
        body,
        postId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [COMMENTS_QUERY_KEY, postId],
        exact: true,
      });
    },
  });
}
