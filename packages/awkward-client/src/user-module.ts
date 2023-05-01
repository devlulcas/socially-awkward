import { fetchThenParse } from './fetch-then-parse';
import { userOutputSchema } from './outputs/user.output';

export class UserModule {
  constructor(private readonly url: string) {}

  async getCurrentUser() {
    return fetchThenParse({
      input: `${this.url}/users/me`,
      schema: userOutputSchema,
    });
  }
}
