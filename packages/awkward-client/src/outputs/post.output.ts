import { z } from 'zod';
import { wrapDataSchema } from './api';
import { simpleUserOutputSchema } from './user.output';

export const postOutputSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  likes: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  author: simpleUserOutputSchema,
});

export type PostOutput = z.infer<typeof postOutputSchema>;

export const postApiResponseSchema = wrapDataSchema(postOutputSchema);

export const postArrayApiResponseSchema = wrapDataSchema(
  z.array(postOutputSchema)
);

export type PostApiResponse = z.infer<typeof postApiResponseSchema>;

export type PostArrayApiResponse = z.infer<typeof postArrayApiResponseSchema>;
