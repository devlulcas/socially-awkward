import { fetchThenParse } from './fetch-then-parse';
import {
  commentApiResponseSchema,
  commentArrayApiResponseSchema,
} from './outputs/comment.output';

export class CommentModule {
  constructor(private readonly url: string) {}

  async createCommentOnPost(input: { postId: string; body: string }) {
    return fetchThenParse({
      input: `${this.url}/comments`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: commentApiResponseSchema,
    });
  }

  async getCommentsFromPost(postId: string) {
    return fetchThenParse({
      input: `${this.url}/comments/${postId}`,
      schema: commentArrayApiResponseSchema,
    });
  }

  async deleteComment(id: string) {
    await fetchThenParse({
      input: `${this.url}/comments/${id}`,
    });
  }
}
