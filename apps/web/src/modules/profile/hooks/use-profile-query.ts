import { useQuery } from 'react-query';
import { apiClient } from '../../../shared/config';

export const PROFILE_QUERY_KEY = 'profile';

export function useProfileQuery() {
  return useQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: apiClient.getCurrentUser,
    select: (response) => response?.data,
  });
}
