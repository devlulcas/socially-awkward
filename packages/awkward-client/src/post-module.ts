import { CommentModule } from "./comment-module";
import { fetchThenParse } from "./fetch-then-parse";
import { postOutputSchema } from "./outputs/post.output";

export class PostModule {
  constructor(private readonly url: string) {}

  async createPost(input: { title: string; content: string }) {
    return fetchThenParse({
      input: `${this.url}/posts`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: postOutputSchema,
    });
  }

  async getPosts() {
    return fetchThenParse({
      input: `${this.url}/posts`,
      schema: postOutputSchema,
    });
  }

  async getPost(id: string) {
    return fetchThenParse({
      input: `${this.url}/posts/${id}`,
      schema: postOutputSchema,
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
      schema: postOutputSchema,
    });
  }

  async unLikePost(id: string) {
    return fetchThenParse({
      input: `${this.url}/posts/${id}/unlike`,
      init: { method: 'POST' },
      schema: postOutputSchema,
    });
  }

  get comments() {
    return new CommentModule(this.url);
  }
}

