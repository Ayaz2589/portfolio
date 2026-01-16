import React from "react";

type RoundGlassButtonProps =
  | ({ as?: "button" } & React.ComponentPropsWithoutRef<"button">)
  | ({ as: "a" } & React.ComponentPropsWithoutRef<"a">);

const baseClasses =
  "inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-800 " +
  "bg-white/30 backdrop-blur-md border border-white/50 shadow-[0_8px_24px_rgba(31,41,55,0.18)] " +
  "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-white/40 " +
  "active:translate-y-0 active:scale-[0.96] active:shadow-md focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
  "dark:text-white dark:bg-white/10 dark:border-white/25 dark:hover:bg-white/20";

export default function RoundGlassButton(props: RoundGlassButtonProps) {
  const { as = "button", className = "", ...rest } =
    props as RoundGlassButtonProps & Record<string, unknown>;
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
