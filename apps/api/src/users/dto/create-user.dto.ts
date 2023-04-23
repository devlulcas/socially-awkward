import { Password } from '../value-objects/password';

export class CreateUserDto {
  username: string;
  email: string;
  password: Password;
}
