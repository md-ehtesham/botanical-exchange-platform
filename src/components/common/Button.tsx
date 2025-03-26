
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, children, ...props }, ref) => {
    const baseStyles = 'btn';
    const variantStyles = `btn-${variant}`;
    const sizeStyles = `btn-${size}`;
    
    const buttonClasses = cn(
      baseStyles,
      variantStyles,
      sizeStyles,
      className
    );

    if (asChild && href) {
      return (
        <Link to={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }
    
    return (
      <button 
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
