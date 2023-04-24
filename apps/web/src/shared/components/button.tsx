import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
};

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'button' | undefined;
};

type ButtonAsLinkProps = React.ComponentProps<typeof Link> & {
  as: 'a';
};

type ButtonProps = BaseButtonProps & (ButtonAsButtonProps | ButtonAsLinkProps);

export function Button(props: ButtonProps) {
  const { variant = 'primary', className, children } = props;

  const style = clsx('px-4 py-2',{
    'bg-primary-600 text-primary-50': variant === 'primary',
    'bg-primary-700 text-primary-200': variant === 'secondary',
  }, className)

  if (props.as === 'a') {
    return (
      <Link className={style} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
