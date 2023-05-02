import { Form } from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { InputField } from '../../auth/components/input-field';

export function CreatePostForm() {
  return (
    <Form method="POST" action="/" className="flex flex-col gap-2 my-4">
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

      <Button as="button" type="submit">
        Post
      </Button>
    </Form>
  );
}
