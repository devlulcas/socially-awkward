import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, ...rest } = props;
  
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-sm',
        variant === 'primary'
          ? 'bg-slate-600 text-slate-50'
          : 'bg-slate-700 text-slate-200'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
