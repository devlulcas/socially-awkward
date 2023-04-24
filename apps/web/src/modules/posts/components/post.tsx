import { Button } from '../../../shared/components/button';

export function Post() {
  return (
    <article className="flex flex-col gap-2 px-2 pt-4 pb-2 bg-primary-700 text-primary-50 rounded-sm">
      <div className="flex gap-2 items-center">
        <img
          className="h-10 aspect-square rounded-full"
          src="https://picsum.photos/200/300"
          alt="avatar"
        />
        <p>Lorem ipsum.</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>

        <p className="text-sm text-primary-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>

      <div className="flex gap-9">
        <Button as="button" className="relative">
          <span className="text-primary-200">Like</span>
          
          <span className="text-primary-200 text-xs font-semibold bg-primary-700 px-1 absolute top-0 border-[1px] border-primary-50">
            120
          </span>
        </Button>

        <Button as="a" to={`/posts/1`}>
          See more
        </Button>
      </div>
    </article>
  );
}
