import clsx from "clsx";

import navigation from "@/data/navigation/navigation";

import NavItem from "./NavItem";

export default function DesktopMenu({ className = "" }) {
  const menuItems = [...navigation]
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <nav
      aria-label="Primary Navigation"
      className={clsx(
        "hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl",
        className,
      )}
    >
      {menuItems.map((item) => (
        <NavItem key={item.id} to={item.path}>
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
}
