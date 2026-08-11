import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({
  children,
  className = "",
  as: Component = "div",
  ...props
}: CardProps) {
  return (
    <Component
      className={`bg-white border border-border transition-colors duration-200 hover:border-charcoal-muted/50 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}
