import * as z from 'zod';

export function wrapDataSchema<T extends z.ZodTypeAny>(schema: T) {
  return z.object({
    data: schema,
  });
}
