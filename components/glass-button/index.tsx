import React from "react";

type GlassButtonProps =
  | ({ as?: "button" } & React.ComponentPropsWithoutRef<"button">)
  | ({ as: "a" } & React.ComponentPropsWithoutRef<"a">);

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-medium text-gray-900 " +
  "bg-white/25 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(31,41,55,0.15)] " +
  "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-white/35 " +
  "active:translate-y-0 active:scale-[0.98] active:shadow-md focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
  "dark:text-white dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20";

export default function GlassButton(props: GlassButtonProps) {
  const { as = "button", className = "", ...rest } = props as GlassButtonProps &
    Record<string, unknown>;
  const classes = `${baseClasses} ${className}`.trim();

  if (as === "a") {
    return (
      <a className={classes} {...(rest as React.ComponentPropsWithoutRef<"a">)} />
    );
  }

  const { type = "button", ...buttonProps } =
    rest as React.ComponentPropsWithoutRef<"button">;

  return <button type={type} className={classes} {...buttonProps} />;
}
