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
import {
  PostApiResponse,
  PostArrayApiResponse,
  UserOutput,
} from 'awkward-client';
import { AuthGuard } from '../auth/auth.guard';
import { Cookies } from '../common/http/cookies';
import { CreatePostDto } from './dto/create-post.dto';
import { PostMapper } from './post.mapper';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @Cookies('user') user: UserOutput,
  ): Promise<PostApiResponse> {
    const post = await this.postsService.create(createPostDto, user.id);

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<PostArrayApiResponse> {
    const posts = await this.postsService.findAll();

    return { data: posts.map(PostMapper.toOutputPostDto) };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostApiResponse> {
    const post = await this.postsService.findOne(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const post = await this.postsService.remove(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id/like')
  async like(@Param('id') id: string): Promise<PostApiResponse> {
    const post = await this.postsService.like(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id/unlike')
  async unlike(@Param('id') id: string): Promise<PostApiResponse> {
    const post = await this.postsService.unlike(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return { data: PostMapper.toOutputPostDto(post) };
  }
}
