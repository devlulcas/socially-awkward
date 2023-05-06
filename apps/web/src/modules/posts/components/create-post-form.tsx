import { Button } from '../../../shared/components/button';
import { InputField } from '../../auth/components/input-field';
import { useCreatePostMutation } from '../hooks/use-create-post-mutation';

export function CreatePostForm() {
  const createPostMutation = useCreatePostMutation();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const title = formData.get('title')?.toString();

    const body = formData.get('body')?.toString();

    if (!title || !body) return;

    createPostMutation.mutate({ title, body });

    ev.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-2 my-4"
    >
      <InputField
        name="title"
        id="title"
        placeholder="Title"
        autoComplete="off"
        label="Title"
      />

      <textarea
        className="w-full p-2 border bg-primary-100 text-primary-900 border-primary-600 resize-none"
        name="body"
        id="body"
        placeholder="Dump your thoughts here"
        cols={30}
        rows={3}
      ></textarea>

      <Button
        as="button"
        type="submit"
        isLoading={createPostMutation.isLoading}
      >
        Post
      </Button>
    </form>
  );
}
