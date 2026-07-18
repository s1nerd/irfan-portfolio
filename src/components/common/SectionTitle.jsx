import clsx from "clsx";

import Badge from "@/components/common/Badge";

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "mb-12",

        {
          "text-left": align === "left",
          "text-center": align === "center",
        },

        className,
      )}
    >
      {badge && (
        <Badge className="mb-5" variant="primary">
          {badge}
        </Badge>
      )}

      <h2 className="text-4xl font-black leading-tight text-white lg:text-5xl">
        {title}

        {highlight && (
          <>
            {" "}
            <span className="text-blue-400">{highlight}</span>
          </>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
