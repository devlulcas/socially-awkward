import { Controller, Get, UseGuards } from '@nestjs/common';
import type { UserApiResponse, UserOutput } from 'awkward-client';
import { AuthGuard } from '../auth/auth.guard';
import { Cookies } from '../common/http/cookies';

@Controller('users')
export class UsersController {
  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@Cookies('user') user: UserOutput): Promise<UserApiResponse> {
    return { data: user };
  }
}
