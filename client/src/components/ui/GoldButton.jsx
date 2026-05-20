import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const GoldButton = ({
  variant = 'filled',
  size = 'md',
  shimmer = false,
  children,
  onClick,
  href,
  className,
  type = 'button',
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-sans tracking-wide transition-all duration-300 ease-out focus:outline-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    filled: "bg-gold-gradient text-cream hover:scale-[1.02] hover:shadow-gold",
    outlined: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-brown-dark",
    ghost: "bg-transparent text-gold hover:bg-gold/10",
  };

  const shimmerStyles = shimmer ? "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent" : "";

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    shimmerStyles,
    className
  );

  if (href) {
    // If it's an external link or hash link
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? "noreferrer" : undefined} onClick={onClick}>
          {children}
        </a>
      );
    }
    // Internal routing
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default GoldButton;
