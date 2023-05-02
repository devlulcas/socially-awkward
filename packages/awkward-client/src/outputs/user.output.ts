import { z } from 'zod';
import { wrapDataSchema } from './api';

export const simpleUserOutputSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string().url(),
});

export type SimpleUserOutput = z.infer<typeof simpleUserOutputSchema>;

export const userOutputSchema = z
  .object({
    email: z.string().email(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .merge(simpleUserOutputSchema);

export type UserOutput = z.infer<typeof userOutputSchema>;

export const userApiResponseSchema = wrapDataSchema(userOutputSchema);

export type UserApiResponse = z.infer<typeof userApiResponseSchema>;
