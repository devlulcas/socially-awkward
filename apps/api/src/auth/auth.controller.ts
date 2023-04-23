import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('sign-up')
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const signUpResult = await this.authService.signUp(signUpDto);

    this.attachTokenToCookie(signUpResult.token, response);

    return { data: signUpResult };
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const signInResult = await this.authService.signIn(signInDto);

    this.attachTokenToCookie(signInResult.token, response);

    return { data: signInResult };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('token');
  }

  private attachTokenToCookie(token: string, response: Response): void {
    response.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
  }
}
