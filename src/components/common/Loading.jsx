import clsx from "clsx";

export default function Loading({
  text = "Loading...",
  size = "md",
  fullScreen = false,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4",

        {
          "min-h-screen": fullScreen,
        },

        className,
      )}
    >
      <div
        className={clsx(
          "animate-spin rounded-full border-4 border-white/10 border-t-blue-500",

          {
            "h-6 w-6": size === "sm",
            "h-10 w-10": size === "md",
            "h-14 w-14": size === "lg",
          },
        )}
      />

      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}
