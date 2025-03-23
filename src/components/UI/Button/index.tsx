import { FC } from 'react';
import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  btnType = 'button',
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'text-text-color bg-primary hover:bg-primary-dark',
    ghost: 'text-text-color bg-transparent hover:bg-border-color',
    danger: 'text-white bg-danger hover:bg-danger-dark',
  };

  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <button
      className={`inline-flex items-center justify-center transition-colors duration-200 font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${btnType === 'icon' ? iconSizeClasses[size] : sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
