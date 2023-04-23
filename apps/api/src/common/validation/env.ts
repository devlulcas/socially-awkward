import { z } from 'nestjs-zod/z';

export const envSchema = z.object({
  JWT_SECRET: z.string(),
  MONGO_URI: z.string(),
});
