import { Button } from '../../../shared/components/button';

export function Post() {
  return (
    <article className="flex flex-col gap-2 px-2 pt-4 pb-2 bg-slate-700 text-slate-50 rounded-sm">
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

        <p className="text-sm text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>

      <div className='flex gap-2'>
        <Button>Like</Button>

        <Button>Comment</Button>
      </div>
    </article>
  );
}
