import React from "react";

type GlassCardProps = React.ComponentPropsWithoutRef<"div">;

export default function GlassCard({ className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/40 bg-white/30 p-8 shadow-[0_12px_40px_rgba(31,41,55,0.12)] backdrop-blur-md sm:p-10 ${className}`.trim()}
      {...props}
    />
  );
}
