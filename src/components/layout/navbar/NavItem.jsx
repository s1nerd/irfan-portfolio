import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, children, className = "", onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 hover:scale-105",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
          {
            "bg-blue-500/15 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.18)]":
              isActive,
            "text-slate-300 hover:bg-white/5 hover:text-white": !isActive,
          },
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
}
