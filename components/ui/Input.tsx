import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id?: string;
}

export function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId =
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-charcoal-muted"
        >
          {label}
          {props.required && (
            <span className="text-gold" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
      )}
      <input
        title={label}
        id={inputId}
        className={`w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-stone focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${error ? "border-red-600" : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={inputId ? `${inputId}-error` : undefined}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
