import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { PROFILE_QUERY_KEY } from '../../profile/hooks/use-profile-query';
import { useNavigate } from 'react-router-dom';

export function useSignInMutation() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: apiClient.signIn,
    onSuccess: () => {
      queryClient.invalidateQueries([PROFILE_QUERY_KEY]);
      navigate('/me');
    },
  });
}
