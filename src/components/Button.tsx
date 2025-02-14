import React, { type ComponentProps, type ElementType, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: ReactNode;
  as?: ElementType;
  to?: string;
  className?: string;
};

type ButtonProps<T extends ElementType = 'button'> = ButtonBaseProps & 
  Omit<ComponentProps<T>, keyof ButtonBaseProps>;

const Button = <T extends ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  as,
  className = '',
  to,
  ...props
}: ButtonProps<T>) => {
  const baseStyles = 'btn inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-white text-secondary hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Use Link component directly if as prop is Link
  if (as === Link) {
    const linkProps: LinkProps = {
      to: to || '/',
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
      ...props as Omit<ButtonProps<'a'>, keyof ButtonBaseProps>
    };

    return (
      <Link {...linkProps}>
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
      </Link>
    );
  }

  // For other elements, use motion component
  const MotionComponent = motion.button;
  
  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props as any}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </MotionComponent>
  );
};

export type { ButtonProps };
export default Button; 