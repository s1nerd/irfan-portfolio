import clsx from "clsx";
import PropTypes from "prop-types";

const colorVariants = {
  blue: {
    badge: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    icon: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  },

  cyan: {
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    icon: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  },

  emerald: {
    badge: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    icon: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  amber: {
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    icon: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  violet: {
    badge: "border-violet-500/20 bg-violet-500/10 text-violet-400",
    icon: "border-violet-500/20 bg-violet-500/10 text-violet-400",
  },

  red: {
    badge: "border-red-500/20 bg-red-500/10 text-red-400",
    icon: "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

export default function SectionHeader({
  icon: Icon,
  badge,
  title,
  description,
  color = "blue",
}) {
  const variant = colorVariants[color] ?? colorVariants.blue;

  return (
    <header className="space-y-5">
      {badge && (
        <span
          className={clsx(
            "inline-flex rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]",
            variant.badge,
          )}
        >
          {badge}
        </span>
      )}

      <div className="flex items-start gap-4">
        {Icon && (
          <div className={clsx("rounded-2xl border p-3", variant.icon)}>
            <Icon size={28} />
          </div>
        )}

        <div className="space-y-2">
          <h2 className="text-4xl font-black text-white">{title}</h2>

          {description && (
            <p className="max-w-3xl leading-8 text-slate-400">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
}

SectionHeader.propTypes = {
  icon: PropTypes.elementType,

  badge: PropTypes.string,

  title: PropTypes.string.isRequired,

  description: PropTypes.string,

  color: PropTypes.oneOf(["blue", "cyan", "emerald", "amber", "violet", "red"]),
};
