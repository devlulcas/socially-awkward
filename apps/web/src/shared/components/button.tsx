import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
};

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'button' | undefined;
};

type ButtonAsLinkProps = React.ComponentProps<typeof Link> & {
  as: 'a';
};

type ButtonProps = BaseButtonProps & (ButtonAsButtonProps | ButtonAsLinkProps);

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    isLoading,
    children,
    className,
    ...rest
  } = props;

  const style = clsx(
    'px-4 py-2',
    {
      'bg-primary-600 text-primary-50': variant === 'primary',
      'bg-primary-700 text-primary-200': variant === 'secondary',
      'bg-gray-300 text-gray-700': props?.disabled || isLoading,
    },
    className
  );

  const showChildren = isLoading ? '...' : children;

  if (rest.as === 'a') {
    return (
      <Link className={style} {...rest}>
        {showChildren}
      </Link>
    );
  }

  return (
    <button className={style} {...rest} disabled={props?.disabled ?? isLoading}>
      {showChildren}
    </button>
  );
}
