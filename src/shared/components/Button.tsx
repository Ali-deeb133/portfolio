import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  ariaLabel?: string; // for screen readers, when the visible text alone is unclear
  children: ReactNode;
}

const variants = {
  primary: 'bg-primary-dark text-white hover:bg-ink',
  secondary: 'border border-primary-dark text-primary-dark hover:bg-tint',
};

// All buttons on the site navigate somewhere, so this renders a link styled as a button.
function Button({ href, variant = 'primary', ariaLabel, children }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition duration-200 motion-safe:hover:scale-105 motion-safe:active:scale-95 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;
