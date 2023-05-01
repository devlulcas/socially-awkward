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

    if (!user) {
      throw new Error('User not found');
    }

    return this.postModel.create({
      ...createPostDto,
      author: {
        _id: user._id,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find();
  }

  async findOne(id: string): Promise<Post | null> {
    return this.postModel.findById(id);
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
    const updatedPostResult = await this.postModel.updateOne(
      { _id: id },
      { $inc: { likes: action === 'like' ? 1 : -1 } },
    );

    if (updatedPostResult.modifiedCount === 0) {
      throw new Error('Post not found');
    }

    return this.findOne(id);
  }
}
