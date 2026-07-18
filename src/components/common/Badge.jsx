import clsx from "clsx";

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
  ...props
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-medium transition-all duration-300",

        {
          "rounded-full": rounded === "full",
          "rounded-xl": rounded === "xl",
          "rounded-lg": rounded === "lg",

          "px-2.5 py-1 text-xs": size === "sm",
          "px-3 py-1.5 text-sm": size === "md",
          "px-4 py-2 text-base": size === "lg",

          "bg-blue-500/15 text-blue-400 border border-blue-500/20":
            variant === "primary",

          "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20":
            variant === "success",

          "bg-amber-500/15 text-amber-400 border border-amber-500/20":
            variant === "warning",

          "bg-red-500/15 text-red-400 border border-red-500/20":
            variant === "danger",

          "bg-violet-500/15 text-violet-400 border border-violet-500/20":
            variant === "secondary",

          "border border-white/10 bg-white/5 text-slate-300":
            variant === "outline",
        },

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
