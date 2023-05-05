import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../../../shared/config';
import { PROFILE_QUERY_KEY } from '../../profile/hooks/use-profile-query';
import { useNavigate } from 'react-router-dom';

export function useSignUpMutation() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: apiClient.signUp,
    onSuccess: () => {
      queryClient.invalidateQueries([PROFILE_QUERY_KEY]);
      navigate('/me');
    },
  });
}
