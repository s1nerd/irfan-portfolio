import clsx from "clsx";

export default function Container({
  children,
  className = "",
  as: Component = "section",
  padding = true,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-7xl",

        padding && "px-6 lg:px-8",

        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
