import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Cookies } from '../common/http/cookies';
import { OutputUserDto } from './dto/output-user.dto';

@Controller('users')
export class UsersController {
  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@Cookies('user') user: OutputUserDto) {
    return { data: user };
  }
}
