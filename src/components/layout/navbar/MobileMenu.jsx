import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

import navigation from "@/data/navigation/navigation";

import NavItem from "./NavItem";

export default function MobileMenu({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={clsx("md:hidden", className)}>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={toggleMenu}
        className="text-white transition hover:text-blue-400"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          <nav className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 border-l border-white/10 bg-slate-950 p-8 shadow-2xl">
            {navigation.map((item) => (
              <NavItem key={item.path} to={item.path} onClick={closeMenu}>
                {item.name}
              </NavItem>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
