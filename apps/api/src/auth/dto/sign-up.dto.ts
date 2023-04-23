import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const signUpSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(32),
  email: z.string().email(),
});

export class SignUpDto extends createZodDto(signUpSchema) {}
