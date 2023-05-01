import { AwkwardClient } from 'awkward-client';

export const apiClient = new AwkwardClient(
  import.meta.env.VITE_AWKWARD_API_URL
);
