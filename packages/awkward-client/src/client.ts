import { fetchThenParse } from './fetch-then-parse';
import { authApiResponseSchema } from './outputs/auth.output';
import {
  commentApiResponseSchema,
  commentArrayApiResponseSchema,
} from './outputs/comment.output';
import {
  postApiResponseSchema,
  postArrayApiResponseSchema,
} from './outputs/post.output';
import { userApiResponseSchema } from './outputs/user.output';

/**
 * Everything in one place because I'm too tired for this.
 */
export class AwkwardClient {
  static url: string;

  constructor(url: string) {
    if (!url) {
      throw new Error('url is required');
    }

    AwkwardClient.url = url;
  }

  /**
   * Pings the API to check if it's up.
   */
  async ping() {
    const res = await fetch(`${AwkwardClient.url}/`);
    return res.json();
  }

  /**
   * Creates a new user and assign an auth cookie.
   */
  async signUp(input: { username: string; email: string; password: string }) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/auth/sign-up`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: authApiResponseSchema,
    });
  }

  /**
   * Login a user and assign an auth cookie.
   */
  async signIn(input: { username: string; password: string }) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/auth/sign-in`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: authApiResponseSchema,
    });
  }

  /**
   * Deletes the auth cookie.
   */
  async signOut() {
    await fetchThenParse({
      input: `${AwkwardClient.url}/auth/sign-out`,
      init: { method: 'POST' },
    });
  }

  /**
   * Gets the current logged in user.
   */
  async getCurrentUser() {
    return fetchThenParse({
      input: `${AwkwardClient.url}/users/me`,
      schema: userApiResponseSchema,
    });
  }

  /**
   * Creates a new post with the current logged in user as the author.
   */
  async createPost(input: { title: string; body: string }) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/posts`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: postApiResponseSchema,
    });
  }

  /**
   * Gets all posts.
   */
  async getPosts() {
    return fetchThenParse({
      input: `${AwkwardClient.url}/posts`,
      schema: postArrayApiResponseSchema,
    });
  }

  /**
   * Gets a specific post.
   */
  async getPost(id: string) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/posts/${id}`,
      schema: postApiResponseSchema,
    });
  }

  /**
   * Deletes a specific post if the current logged in user is the author.
   */
  async deletePost(id: string) {
    await fetchThenParse({
      input: `${AwkwardClient.url}/posts/${id}`,
    });
  }

  /**
   * Likes a specific post. That action does not require authentication.
   * An user can like it more than one time.
   */
  async likePost(id: string) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/posts/${id}/like`,
      init: { method: 'POST' },
      schema: postApiResponseSchema,
    });
  }

  /**
   * Dislikes a specific post. That action does not require authentication.
   * An user can dislike it more than one time.
   */
  async unLikePost(id: string) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/posts/${id}/unlike`,
      init: { method: 'POST' },
      schema: postApiResponseSchema,
    });
  }

  /**
   * Comment in a post with the current logged user as the author.
   */
  async createCommentOnPost(input: { postId: string; body: string }) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/comments`,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      },
      schema: commentApiResponseSchema,
    });
  }

  /**
   * Gets all comments from a specific post.
   */
  async getCommentsFromPost(postId: string) {
    return fetchThenParse({
      input: `${AwkwardClient.url}/comments/${postId}`,
      schema: commentArrayApiResponseSchema,
    });
  }

  /**
   * Deletes a specific comment if the current logged in user is the author.
   */
  async deleteComment(id: string) {
    await fetchThenParse({
      input: `${AwkwardClient.url}/comments/${id}`,
    });
  }
}
