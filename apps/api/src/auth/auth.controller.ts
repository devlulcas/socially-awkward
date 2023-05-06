import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthApiResponse } from 'awkward-client';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('sign-up')
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AuthApiResponse> {
    const signUpResult = await this.authService.signUp(signUpDto);

    this.attachTokenToCookie(signUpResult.token, response);

    return { data: signUpResult };
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AuthApiResponse> {
    const signInResult = await this.authService.signIn(signInDto);

    this.attachTokenToCookie(signInResult.token, response);

    return { data: signInResult };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('token');

    return {
      data: null,
    };
  }

  private attachTokenToCookie(token: string, response: Response): void {
    response.cookie('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 1000 * 60 * 60 * 24,
    });
  }
}
