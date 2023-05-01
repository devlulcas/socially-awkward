import { AuthModule } from './auth-module';
import { PostModule } from './post-module';
import { UserModule } from './user-module';

export class AwkwardClient {
  constructor(private readonly url: string) {}

  async ping() {
    const res = await fetch(`${this.url}/`);
    return res.json();
  }

  get user() {
    return new UserModule(this.url);
  }

  get auth() {
    return new AuthModule(this.url);
  }

  get post() {
    return new PostModule(this.url);
  }
}
