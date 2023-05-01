export class OutputCommentDto {
  id: string;
  postId: string;
  author: {
    id: string;
    username: string;
    profilePicture: string;
  };
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
