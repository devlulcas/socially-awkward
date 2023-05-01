import { z } from 'zod';
import { simpleUserOutputSchema } from './user.output';

export const postOutputSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  postId: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  author: simpleUserOutputSchema,
});

export type PostOutput = z.infer<typeof postOutputSchema>;
