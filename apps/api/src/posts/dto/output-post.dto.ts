export class OutputPostDto {
  id: string;
  author: {
    id: string;
    username: string;
    profilePicture: string;
  };
  title: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}
