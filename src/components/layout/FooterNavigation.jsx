import clsx from "clsx";
import { NavLink } from "react-router-dom";

import navigation from "@/data/navigation/navigation";

export default function FooterNavigation({ className = "" }) {
  return (
    <nav
      aria-label="Footer Navigation"
      className={clsx("flex flex-wrap justify-center gap-6", className)}
    >
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              "text-sm font-medium transition-colors duration-300",

              {
                "text-blue-400": isActive,
                "text-slate-400 hover:text-white": !isActive,
              },
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
