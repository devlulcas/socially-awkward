import { PostOutput } from 'awkward-client';
import { Post } from './entities/post.entity';

export class PostMapper {
  static toOutputPostDto(post: Post): PostOutput {
    return {
      id: post._id,
      author: {
        id: post.author._id,
        username: post.author.username,
        avatar: post.author.avatar,
      },
      title: post.title,
      body: post.body,
      likes: post.likes,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };
  }
}
