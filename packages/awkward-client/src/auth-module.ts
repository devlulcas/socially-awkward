import { fetchThenParse } from './fetch-then-parse';
import { authApiResponseSchema } from './outputs/auth.output';

export class AuthModule {
  constructor(private readonly url: string) {}

  async signUp(input: { username: string; email: string; password: string }) {
    return fetchThenParse({
      input: `${this.url}/auth/sign-up`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: authApiResponseSchema,
    });
  }

  async signIn(input: { username: string; password: string }) {
    return fetchThenParse({
      input: `${this.url}/auth/sign-in`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: authApiResponseSchema,
    });
  }

  async signOut() {
    await fetchThenParse({
      input: `${this.url}/auth/sign-out`,
      init: { method: 'POST' },
    });
  }
}
