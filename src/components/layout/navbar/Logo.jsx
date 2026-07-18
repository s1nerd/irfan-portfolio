import clsx from "clsx";
import { Link } from "react-router-dom";

import profile from "@/data/profile/profile";

export default function Logo({ className = "" }) {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      to="/"
      title={profile.name}
      aria-label={`${profile.name} Home`}
      className={clsx(
        "text-xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      {initials}
      <span className="text-blue-400">.</span>
    </Link>
  );
}
