import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createCommentSchema = z.object({
  postId: z.string().uuid(),
  content: z.string().min(1).max(255),
});

export class CreateCommentDto extends createZodDto(createCommentSchema) {}
