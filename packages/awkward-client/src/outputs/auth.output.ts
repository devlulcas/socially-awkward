import { z } from 'zod';
import { wrapDataSchema } from './api';

const payloadSchema = z.object({
  sub: z.string().uuid(),
  username: z.string().min(3).max(50),
  avatar: z.string().url(),
});

const authOutputSchema = z.object({
  payload: payloadSchema,
  token: z.string(),
});

export type AuthOutput = z.infer<typeof authOutputSchema>;

export const authApiResponseSchema = wrapDataSchema(authOutputSchema);

export type AuthApiResponse = z.infer<typeof authApiResponseSchema>;
