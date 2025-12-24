import React from "react";
import { Link } from "react-router-dom";

/**
 * Flexible Button Component
 *
 * @param {Object} props
 * @param {string} [props.variant='primary'] - primary, accent, outline, ghost, light
 * @param {string} [props.size='md'] - sm, md, lg
 * @param {boolean} [props.loading=false] - loading state
 * @param {boolean} [props.disabled=false] - disabled state
 * @param {React.ReactNode} [props.leftIcon] - icon before text
 * @param {React.ReactNode} [props.rightIcon] - icon after text
 * @param {string} [props.href] - if provided, renders as <a>
 * @param {string} [props.to] - if provided, renders as <Link> (for internal routing)
 * @param {string} [props.className] - additional classes
 * @param {React.ReactNode} props.children - button text/content
 */
const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  href,
  to,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 whitespace-nowrap";

  const variants = {
    primary:
      "bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary shadow-premium hover:shadow-primary/40",
    accent:
      "bg-secondary text-white border-2 border-secondary hover:bg-transparent hover:text-secondary shadow-premium hover:shadow-secondary/40",
    purple:
      "bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary shadow-premium hover:shadow-primary/40",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-soft hover:shadow-primary/20",
    ghost: "bg-transparent text-primary hover:bg-primary/5 font-bold",
    ghost2: "bg-transparent text-[#434393] hover:bg-[#434393]/5 font-bold",
    light:
      "bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white shadow-premium hover:shadow-white/20",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
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
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!loading && leftIcon && (
        <span className="mr-2 inline-flex items-center">{leftIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {!loading && rightIcon && (
        <span className="ml-2 inline-flex items-center">{rightIcon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
