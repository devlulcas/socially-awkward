import { Button } from '../../../shared/components/button';

type PostProps = {
  id: string;
  avatar: string;
  content: string;
  title: string;
  likes: number;
  author: string;
};

export function Post({ avatar, author, content, id, likes, title }: PostProps) {
  return (
    <article className="flex flex-col gap-2 px-2 pt-4 pb-2 bg-primary-700 text-primary-50 rounded-sm">
      <div className="flex gap-2 items-center">
        <img
          className="h-10 aspect-square rounded-full"
          src={avatar}
          alt="avatar"
        />
        <p>{author}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-sm text-primary-200">
          {content.length > 100 ? `${content.slice(0, 100)}...` : content}
        </p>
      </div>

      <div className="flex gap-9">
        <Button as="button" className="relative">
          <span className="text-primary-200">Like</span>

          <span className="text-primary-200 text-xs font-semibold bg-primary-700 px-1 absolute top-0 border-[1px] border-primary-50">
            {likes}
          </span>
        </Button>

        <Button as="a" to={`/posts/${id}`}>
          See more
        </Button>
      </div>
    </article>
  );
}
