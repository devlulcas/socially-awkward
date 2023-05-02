import { PostOutput } from 'awkward-client';
import { Button } from '../../../shared/components/button';

type PostProps = {
  data: PostOutput
};

export function Post({ data }: PostProps) {
  return (
    <article className="flex flex-col gap-2 px-2 pt-4 pb-2 bg-primary-700 text-primary-50 rounded-sm">
      <div className="flex gap-2 items-center">
        <img
          className="h-10 aspect-square rounded-full"
          src={data.author.avatar}
          alt="avatar"
        />
        <p>{data.author.username}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">{data.title}</h2>

        <p className="text-sm text-primary-200">
          {data.body.length > 100 ? `${data.body.slice(0, 100)}...` : data.body}
        </p>
      </div>

      <div className="flex gap-9">
        <Button as="button" className="relative">
          <span className="text-primary-200">Like</span>

          <span className="text-primary-200 text-xs font-semibold bg-primary-700 px-1 absolute top-0 border-[1px] border-primary-50">
            {data.likes}
          </span>
        </Button>

        <Button as="a" to={`/posts/${data.id}`}>
          See more
        </Button>
      </div>
    </article>
  );
}
