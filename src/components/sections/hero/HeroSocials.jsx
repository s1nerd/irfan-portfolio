import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import contact from "@/data/contact/contact";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

const colorMap = {
  GitHub: "hover:text-white hover:border-white/30",

  LinkedIn: "hover:text-sky-400 hover:border-sky-400/40",

  Instagram: "hover:text-pink-400 hover:border-pink-400/40",

  Email: "hover:text-emerald-400 hover:border-emerald-400/40",
};

export default function HeroSocials() {
  const socialItems = [
    ...contact.socials.map((social) => ({
      name: social.name,

      href: social.url,

      icon: iconMap[social.name],

      color: colorMap[social.name],

      internal: false,
    })),

    {
      name: "Email",

      href: "/contact",

      icon: FaEnvelope,

      color: colorMap.Email,

      internal: true,
    },
  ].filter((item) => item.href && item.icon);

  return (
    <div className="flex items-center gap-4">
      {socialItems.map((item) => {
        const Icon = item.icon;

        const className = clsx(
          "group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
          item.color,
        );

        if (item.internal) {
          return (
            <Link
              key={item.name}
              to={item.href}
              aria-label={item.name}
              className={className}
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          );
        }

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={className}
          >
            <Icon
              size={20}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}
