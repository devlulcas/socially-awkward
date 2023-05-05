import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { POST_QUERY_KEY } from './use-post-query';
import { useNavigate } from 'react-router-dom';

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: apiClient.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries([POST_QUERY_KEY]);
      navigate('/');
    },
  });
}
