import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthOutput } from 'awkward-client';
import { UsersService } from '../users/users.service';
import { Password } from '../users/value-objects/password';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<AuthOutput> {
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
      avatar: newUser.avatar,
    };

    const token = await this.jwtService.signAsync(payload);

    return { payload, token };
  }

  async signIn(signInDto: SignInDto): Promise<AuthOutput> {
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
      avatar: user.avatar,
    };

    const token = await this.jwtService.signAsync(payload);

    return { payload, token };
  }
}
