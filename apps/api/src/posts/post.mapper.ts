import { OutputPostDto } from './dto/output-post.dto';
import { Post } from './entities/post.entity';

export class PostMapper {
  static toOutputPostDto(post: Post): OutputPostDto {
    return {
      id: post._id,
      author: {
        id: post.author._id,
        username: post.author.username,
        profilePicture: post.author.profilePicture,
      },
      title: post.title,
      content: post.content,
      likes: post.likes,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }
}
