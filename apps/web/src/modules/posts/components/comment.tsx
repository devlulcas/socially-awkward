import clsx from 'clsx';

type CommentProps = {
  avatar: string;
  content: string;
  author: string;
  isAuthor: boolean;
};

export function Comment({ author, avatar, content, isAuthor }: CommentProps) {
  return (
    <div
      className={clsx(
        'flex gap-2 bg-primary-800',
        isAuthor && 'bg-primary-950'
      )}
    >
      <img className="h-10 aspect-square" src={avatar} alt="avatar" />

      <div>
        <p className="font-bold">{author}</p>
        <p className="p-2 mt-2">{content}</p>
      </div>
    </div>
  );
}
