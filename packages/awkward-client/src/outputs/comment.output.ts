import { z } from 'zod';
import { simpleUserOutputSchema } from './user.output';
import { wrapDataSchema } from './api';

export const commentOutputSchema = z.object({
  id: z.string(),
  postId: z.string(),
  body: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  author: simpleUserOutputSchema,
});

export type CommentOutput = z.infer<typeof commentOutputSchema>;

export const commentApiResponseSchema = wrapDataSchema(commentOutputSchema);


export type CommentApiResponse = z.infer<
  typeof commentApiResponseSchema
>;

export const commentArrayApiResponseSchema = wrapDataSchema(
  z.array(commentOutputSchema)
);

export type CommentArrayApiResponse = z.infer<
  typeof commentArrayApiResponseSchema
>;
