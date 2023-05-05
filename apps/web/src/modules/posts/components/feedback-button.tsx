import clsx from 'clsx';
import { Button } from '../../../shared/components/button';
import { useLikePostMutation } from '../hooks/use-like-post-mutation';
import { useUnlikePostMutation } from '../hooks/use-unlike-post-mutation';
import { PostOutput } from 'awkward-client';

type FeedbackButtonProps = {
  post: PostOutput;
};

export function FeedbackButton({ post }: FeedbackButtonProps) {
  const likePostMutation = useLikePostMutation();
  const unlikePostMutation = useUnlikePostMutation();

  // data.data -> one for the react query api and another for the fetch response
  const likes = likePostMutation.data?.data.likes ?? post.likes;

  return (
    <div className="flex gap-2 items-center">
      <Button as="button" onClick={() => likePostMutation.mutate(post.id)}>
        Like
      </Button>

      <Button as="button" onClick={() => unlikePostMutation.mutate(post.id)}>
        Dislike
      </Button>

      <p
        className={clsx(
          'px-4 py-2',
          likes < 0 ? 'bg-red-800 text-red-50' : 'bg-blue-500 text-blue-50'
        )}
      >
        {likes}
      </p>
    </div>
  );
}
