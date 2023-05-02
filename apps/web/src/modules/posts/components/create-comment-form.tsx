import { Form } from 'react-router-dom';
import { Button } from '../../../shared/components/button';

type CreateCommentFormProps = {
  postId: string;
};

export function CreateCommentForm({ postId }: CreateCommentFormProps) {
  return (
    <Form
      method="POST"
      action={`/posts/${postId}/comments`}
      className="flex flex-col gap-2 my-4"
    >
      <textarea
        className="w-full p-2 border bg-primary-100 text-primary-900 border-primary-600 resize-none"
        name="comment"
        id="comment"
        placeholder="Write a comment..."
        cols={30}
        rows={3}
      ></textarea>

      <Button as="button" type="submit">
        Comment
      </Button>
    </Form>
  );
}
