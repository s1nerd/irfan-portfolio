import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

import navigation from "@/data/navigation/navigation";

import NavItem from "./NavItem";

export default function MobileMenu({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = useMemo(
    () =>
      [...navigation]
        .filter((item) => item.visible)
        .sort((a, b) => a.order - b.order),
    [],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

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
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
        className="text-white transition-colors duration-300 hover:text-blue-400"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-9998 bg-black/60 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <nav
              id="mobile-navigation"
              aria-label="Mobile Navigation"
              className="fixed inset-y-0 right-0 z-9999 flex w-72 flex-col border-l border-white/10 bg-slate-950 p-8 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Navigation</h2>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-lg p-2 text-white transition hover:bg-white/10"
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                {menuItems.map((item) => (
                  <NavItem key={item.id} to={item.path} onClick={closeMenu}>
                    {item.label}
                  </NavItem>
                ))}
              </div>
            </nav>
          </>,
          document.body,
        )}
    </div>
  );
}
