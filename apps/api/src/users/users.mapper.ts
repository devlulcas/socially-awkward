import { OutputUserDto } from './dto/output-user.dto';
import { User } from './entities/user.entity';

export class UserMapper {
  static toOutputUserDto(user: User): OutputUserDto {
    return {
      id: user._id,
      username: user.username,
      email: user.email,
    };
  }
}
