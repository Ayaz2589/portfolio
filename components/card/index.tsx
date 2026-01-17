import React from "react";

type CardProps = React.ComponentPropsWithoutRef<"div">;

export default function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`p-5 sm:rounded-2xl sm:bg-gray-100/60 sm:shadow-sm ${className}`.trim()}
      {...props}
    />
  );
}
