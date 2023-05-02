import { User } from './entities/user.entity';
import type { UserOutput } from 'awkward-client';

export class UserMapper {
  static toOutputUserDto(user: User): UserOutput {
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }
}
