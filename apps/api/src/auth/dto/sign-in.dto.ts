import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const signInSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(32),
});

export class SignInDto extends createZodDto(signInSchema) {}
