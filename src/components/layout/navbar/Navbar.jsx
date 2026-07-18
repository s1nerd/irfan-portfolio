import { useEffect, useState } from "react";
import clsx from "clsx";

import Container from "@/components/layout/Container";

import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar({ className = "" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent",
        className,
      )}
    >
      <Container
        as="nav"
        aria-label="Main Navigation"
        className={clsx(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-18" : "h-20",
        )}
      >
        <Logo />

        <DesktopMenu />

        <MobileMenu />
      </Container>
    </header>
  );
}
