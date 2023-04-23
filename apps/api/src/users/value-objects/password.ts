import * as bcrypt from 'bcryptjs';

export class Password {
  private password: string;

  private constructor(password: string) {
    this.password = bcrypt.hashSync(password, 10);
  }

  get hashedValue(): string {
    return this.password;
  }

  static async compare(
    plainTextPassword: string,
    password: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, password);
  }
  static create(password: string): Password {
    return new Password(password);
  }
}
