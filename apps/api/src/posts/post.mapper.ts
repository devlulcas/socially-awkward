import { OutputPostDto } from './dto/output-post.dto';
import { Post } from './entities/post.entity';

export class PostMapper {
  static toOutputPostDto(post: Post): OutputPostDto {
    return {
      id: post._id,
      authorId: post.authorId?._id,
      title: post.title,
      content: post.content,
      likes: post.likes,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }
}
