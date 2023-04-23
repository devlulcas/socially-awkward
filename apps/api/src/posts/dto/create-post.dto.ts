import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createPostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1).max(255),
});

export class CreatePostDto extends createZodDto(createPostSchema) {}
