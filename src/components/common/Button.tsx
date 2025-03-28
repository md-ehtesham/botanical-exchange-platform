
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
    const variantStyles = {
      primary: "bg-starhi-green text-white hover:bg-starhi-green-dark",
      secondary: "bg-white text-starhi-green hover:bg-gray-50 border border-gray-200",
      outlined: "bg-transparent border border-starhi-green text-starhi-green hover:bg-starhi-green/10",
      ghost: "bg-transparent text-starhi-green hover:bg-starhi-green/10"
    };
    
    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg"
    };
    
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-starhi-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
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
