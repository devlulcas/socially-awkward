import { fetchThenParse } from "./fetch-then-parse";
import { userOutputSchema } from "./outputs/user.output";

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
      schema: userOutputSchema,
    });
  }

  async signIn(input: { email: string; password: string }) {
    return fetchThenParse({
      input: `${this.url}/auth/sign-in`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: userOutputSchema,
    });
  }

  async signOut() {
    await fetchThenParse({
      input: `${this.url}/auth/sign-out`,
      init: { method: 'POST' },
    });
  }
}
