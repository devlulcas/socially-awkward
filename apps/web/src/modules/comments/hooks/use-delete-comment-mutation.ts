import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { COMMENTS_QUERY_KEY } from './use-comments-query';

export function useDeleteCommentMutation(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [COMMENTS_QUERY_KEY, postId],
        exact: true,
      });
    },
  });
}
