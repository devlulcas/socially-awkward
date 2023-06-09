import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostsService } from '../posts/posts.service';
import { UsersService } from '../users/users.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    commenterId: string,
  ): Promise<Comment> {
    const post = await this.postsService.findOne(createCommentDto.postId);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const commenter = await this.usersService.findOneById(commenterId);

    if (!commenter) {
      throw new NotFoundException('Commenter not found');
    }

    return this.commentModel.create({
      ...createCommentDto,
      author: {
        _id: commenter._id,
        username: commenter.username,
        avatar: commenter.avatar,
      },
    });
  }

  async findAll(postId: string): Promise<Comment[]> {
    return this.commentModel.find({ postId: postId }).exec();
  }

  async remove(postId: string, id: string): Promise<Comment> {
    const deleted = await this.commentModel.findOneAndDelete({
      _id: id,
      post: postId,
    });

    if (!deleted) {
      throw new NotFoundException('Comment not found');
    }

    return deleted;
  }
}
