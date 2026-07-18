import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset posisi scroll sebelum halaman baru dirender
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
