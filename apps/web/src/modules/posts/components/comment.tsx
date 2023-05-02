import { CommentOutput } from 'awkward-client';
import clsx from 'clsx';

type CommentProps = {
  data: CommentOutput;
  isAuthor: boolean;
};

export function Comment({ data, isAuthor }: CommentProps) {
  return (
    <div
      className={clsx(
        'flex gap-2 bg-primary-800',
        isAuthor && 'bg-primary-950'
      )}
    >
      <img
        className="h-10 aspect-square"
        src={data.author.avatar}
        alt="avatar"
      />

      <div>
        <p className="font-bold">{data.author.username}</p>
        <p className="p-2 mt-2">{data.body}</p>
      </div>
    </div>
  );
}
