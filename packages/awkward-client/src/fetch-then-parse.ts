import { z } from 'zod';

type FetchThenParseOptions<T> = {
  input: RequestInfo | URL;
  init?: RequestInit | undefined;
  schema?: z.Schema<T>;
};

export async function fetchThenParse<T>(
  options: FetchThenParseOptions<T>
): Promise<T> {
  const res = await fetch(options.input, options.init);

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error + ': ' + json.message);
  }

  if (!options.schema) {
    if (typeof json !== 'object') {
      return {
        data: json,
      } as any
    }

    return json;
  }

  return options.schema.parse(json);
}
