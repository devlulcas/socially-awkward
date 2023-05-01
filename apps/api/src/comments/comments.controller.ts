import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Cookies } from 'src/common/http/cookies';
import { OutputUserDto } from 'src/users/dto/output-user.dto';
import { CommentMapper } from './comments.mapper';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Cookies('user') user: OutputUserDto,
  ) {
    const created = this.commentsService.create(createCommentDto, user.id);

    return { data: CommentMapper.toOutputCommentDto(await created) };
  }

  @Get(':post_id')
  async findAll(@Param('post_id') postId: string) {
    const posts = this.commentsService.findAll(postId);

    return { data: (await posts).map(CommentMapper.toOutputCommentDto) };
  }

  @UseGuards(AuthGuard)
  @Delete(':post_id/:comment_id')
  async remove(
    @Param('post_id') postId: string,
    @Param('comment_id') commentId: string,
  ) {
    const deleted = await this.commentsService.remove(postId, commentId);

    return { data: CommentMapper.toOutputCommentDto(deleted) };
  }
}
