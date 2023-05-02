import { CommentModule } from './comment-module';
import { fetchThenParse } from './fetch-then-parse';
import {
  postApiResponseSchema,
  postArrayApiResponseSchema,
} from './outputs/post.output';

export class PostModule {
  constructor(private readonly url: string) {}

  async createPost(input: { title: string; body: string }) {
    return fetchThenParse({
      input: `${this.url}/posts`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: postApiResponseSchema,
    });
  }

  async getPosts() {
    return fetchThenParse({
      input: `${this.url}/posts`,
      schema: postArrayApiResponseSchema,
    });
  }

  async getPost(id: string) {
    return fetchThenParse({
      input: `${this.url}/posts/${id}`,
      schema: postApiResponseSchema,
    });
  }

  async deletePost(id: string) {
    await fetchThenParse({
      input: `${this.url}/posts/${id}`,
    });
  }

  async likePost(id: string) {
    return fetchThenParse({
      input: `${this.url}/posts/${id}/like`,
      init: { method: 'POST' },
      schema: postApiResponseSchema,
    });
  }

  async unLikePost(id: string) {
    return fetchThenParse({
      input: `${this.url}/posts/${id}/unlike`,
      init: { method: 'POST' },
      schema: postApiResponseSchema,
    });
  }

  get comments() {
    return new CommentModule(this.url);
  }
}
