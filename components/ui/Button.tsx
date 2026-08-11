import * as React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

/**
 * In-app routes go through `next/link` for client-side navigation. Anything else
 * (`mailto:`, `tel:`, external URLs, bare fragments) stays a plain anchor.
 */
function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background border border-foreground hover:bg-charcoal hover:border-charcoal transition-colors duration-200",
  secondary:
    "bg-gold text-white border border-gold hover:bg-gold-muted hover:border-gold-muted transition-colors duration-200",
  outline:
    "bg-transparent text-foreground border border-charcoal-muted hover:border-foreground hover:bg-slate-light/50 transition-colors duration-200",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-slate-light/50 transition-colors duration-200",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.98]";
  const combined = `${base} ${variantStyles[variant]} ${className}`.trim();

  if (href !== undefined) {
    if (isInternalRoute(href)) {
      return (
        <Link href={href} className={combined}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combined} {...props}>
      {children}
    </button>
  );
}
