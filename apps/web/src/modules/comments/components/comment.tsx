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
        'bg-primary-800 p-2',
        isAuthor && 'bg-primary-900'
      )}
    >
      <div className='flex items-center gap-2 p-1 bg-primary-700'>
        <img
          className="h-10 aspect-square bg-primary-400"
          src={data.author.avatar}
          alt="avatar"
        />

        <p className="font-bold">{data.author.username}</p>
      </div>

      <p className="mt-2">{data.body}</p>
    </div>
  );
}
