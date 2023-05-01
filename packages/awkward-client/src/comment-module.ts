import { fetchThenParse } from './fetch-then-parse';
import { postOutputSchema } from './outputs/post.output';

export class CommentModule {
  constructor(private readonly url: string) {}

  async createCommentOnPost(input: { postId: string; content: string }) {
    return fetchThenParse({
      input: `${this.url}/comments`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: postOutputSchema,
    });
  }

  async getCommentsFromPost(postId: string) {
    return fetchThenParse({
      input: `${this.url}/comments/${postId}`,
      schema: postOutputSchema,
    });
  }

  async deleteComment(id: string) {
    await fetchThenParse({
      input: `${this.url}/comments/${id}`,
    });
  }
}
