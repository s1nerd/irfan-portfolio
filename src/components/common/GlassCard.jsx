import clsx from "clsx";

const colorVariants = {
  blue: {
    border: "hover:border-blue-500/30",
    background: "hover:bg-blue-500/5",
  },

  cyan: {
    border: "hover:border-cyan-500/30",
    background: "hover:bg-cyan-500/5",
  },

  emerald: {
    border: "hover:border-emerald-500/30",
    background: "hover:bg-emerald-500/5",
  },

  amber: {
    border: "hover:border-amber-500/30",
    background: "hover:bg-amber-500/5",
  },

  violet: {
    border: "hover:border-violet-500/30",
    background: "hover:bg-violet-500/5",
  },

  red: {
    border: "hover:border-red-500/30",
    background: "hover:bg-red-500/5",
  },
};

export default function GlassCard({
  children,
  className = "",
  hover = false,
  padding = "md",
  color = "blue",
  as: Component = "div",
  ...props
}) {
  const variant = colorVariants[color] ?? colorVariants.blue;

  return (
    <Component
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300",

        {
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",

          "hover:-translate-y-1 hover:shadow-xl": hover,

          [variant.border]: hover,
          [variant.background]: hover,
        },

        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
