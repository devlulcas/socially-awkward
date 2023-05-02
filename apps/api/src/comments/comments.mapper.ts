import { CommentOutput } from 'awkward-client';
import { Comment } from './entities/comment.entity';

export class CommentMapper {
  static toOutputCommentDto(comment: Comment): CommentOutput {
    return {
      id: comment._id,
      postId: comment.postId,
      author: {
        id: comment.author._id,
        username: comment.author.username,
        avatar: comment.author.avatar,
      },
      body: comment.body,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
    };
  }
}
