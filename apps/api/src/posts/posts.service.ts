import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    private readonly usersService: UsersService,
  ) {}

  async create(createPostDto: CreatePostDto, authorId: string): Promise<Post> {
    const user = await this.usersService.findOneById(authorId);

    return this.postModel.create({
      ...createPostDto,
      authorId: user,
    });
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().populate('authorId').exec();
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.postModel.findById(id).populate('authorId').exec();

    return post;
  }

  async remove(id: string): Promise<Post | null> {
    const removedPost = this.postModel.findByIdAndDelete(id);

    return removedPost;
  }

  async like(id: string): Promise<Post | null> {
    return this.updateLikeCount(id, 'like');
  }

  async unlike(id: string): Promise<Post | null> {
    return this.updateLikeCount(id, 'unlike');
  }

  private async updateLikeCount(id: string, action: 'like' | 'unlike') {
    const post = await this.postModel.findById(id);

    if (!post) {
      return null;
    }

    post.likes = action === 'like' ? post.likes + 1 : post.likes - 1;

    return post.save();
  }
}
