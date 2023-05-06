import { Button } from '../../../shared/components/button';
import { useCreateCommentMutation } from '../hooks/use-create-comment-mutation';

type CreateCommentFormProps = {
  postId: string;
};

export function CreateCommentForm({ postId }: CreateCommentFormProps) {
  const createCommentMutation = useCreateCommentMutation(postId);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const body = formData.get('body')?.toString();

    if (!body) return;

    createCommentMutation.mutate(body);

    ev.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-2 my-4"
    >
      <textarea
        className="w-full p-2 border bg-primary-100 text-primary-900 border-primary-600 resize-none"
        name="body"
        id="body"
        placeholder="Write a comment..."
        cols={30}
        rows={3}
      ></textarea>

      <Button
        as="button"
        type="submit"
        isLoading={createCommentMutation.isLoading}
      >
        Comment
      </Button>
    </form>
  );
}
