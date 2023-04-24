import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Cookies } from '../common/http/cookies';
import { OutputUserDto } from '../users/dto/output-user.dto';
import { PostMapper } from './post.mapper';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @Cookies('user') user: OutputUserDto,
  ) {
    const post = await this.postsService.create(createPostDto, user.id);

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const posts = await this.postsService.findAll();

    return { data: posts.map(PostMapper.toOutputPostDto) };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = await this.postsService.remove(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: null };
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id/like')
  async like(@Param('id') id: string) {
    const post = await this.postsService.like(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id/like')
  async unlike(@Param('id') id: string) {
    const post = await this.postsService.unlike(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }
}
