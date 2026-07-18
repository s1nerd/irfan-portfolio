import clsx from "clsx";

export default function Button({
  children,
  as: Component = "button",
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  ...props
}) {
  return (
    <Component
      type={Component === "button" ? type : undefined}
      disabled={Component === "button" ? disabled || loading : undefined}
      className={clsx(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 font-medium transition-all duration-300",

        {
          "w-full": fullWidth,

          "cursor-pointer": !disabled && !loading,
          "cursor-not-allowed opacity-60": disabled || loading,

          "bg-blue-600 text-white hover:bg-blue-500": variant === "primary",

          "border border-white/20 text-white hover:bg-white/10":
            variant === "outline",

          "bg-transparent text-white hover:bg-white/10": variant === "ghost",
        },

        className,
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Component>
  );
}
