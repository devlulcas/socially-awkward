import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthOutputDto } from './dto/auth-output.dto';
import { Password } from '../users/value-objects/password';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<AuthOutputDto> {
    const user = await this.usersService.findOneByUsername(signUpDto.username);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const password = Password.create(signUpDto.password);

    const newUser = await this.usersService.create({
      email: signUpDto.email,
      username: signUpDto.username,
      password: password,
    });

    const payload = {
      username: newUser.username,
      sub: newUser._id,
    };

    const token = await this.jwtService.signAsync(payload);

    return { payload, token };
  }

  async signIn(signInDto: SignInDto): Promise<AuthOutputDto> {
    const user = await this.usersService.findOneByUsername(signInDto.username);

    if (!user) {
      throw new UnauthorizedException('Error signing in');
    }

    const passwordMatch = await Password.compare(
      signInDto.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Error signing in');
    }

    const payload = {
      username: user.username,
      sub: user._id,
    };

    const token = await this.jwtService.signAsync(payload);

    return { payload, token };
  }
}
