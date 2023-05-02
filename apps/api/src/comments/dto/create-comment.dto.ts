import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createCommentSchema = z.object({
  postId: z.string().uuid(),
  body: z.string().min(1).max(255),
});

export class CreateCommentDto extends createZodDto(createCommentSchema) {}
