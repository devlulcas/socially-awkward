import { OutputCommentDto } from './dto/output-comment.dto';
import { Comment } from './entities/comment.entity';

export class CommentMapper {
  static toOutputCommentDto(comment: Comment): OutputCommentDto {
    return {
      id: comment._id,
      postId: comment.postId,
      author: {
        id: comment.author._id,
        username: comment.author.username,
        profilePicture: comment.author.profilePicture,
      },
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };
  }
}
