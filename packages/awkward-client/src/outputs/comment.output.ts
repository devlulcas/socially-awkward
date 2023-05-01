import { z } from 'zod';
import { simpleUserOutputSchema } from './user.output';

export const commentOutputSchema = z.object({
  data: z.object({
    id: z.string(),
    postId: z.string(),
    body: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    author: simpleUserOutputSchema,
  }),
});

export type CommentOutput = z.infer<typeof commentOutputSchema>;
