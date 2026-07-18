import clsx from "clsx";
import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

import contact from "@/data/contact/contact";
import profile from "@/data/profile/profile";

import FooterNavigation from "./FooterNavigation";

const FOOTER_CTA_HIDDEN_ROUTES = ["/contact"];

const github = contact.socials.find((item) => item.name === "GitHub");
const linkedin = contact.socials.find((item) => item.name === "LinkedIn");

export default function Footer({ className = "" }) {
  const currentYear = new Date().getFullYear();

  const location = useLocation();

  const hideCTA = FOOTER_CTA_HIDDEN_ROUTES.includes(location.pathname);

  return (
    <footer className={clsx("border-t border-white/10", className)}>
      <Container className="py-20">
        {/* CTA */}

        {!hideCTA && (
          <div className="rounded-4xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Let's Build Better
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {" "}
                Solutions Together
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
              Ready to help your organization build scalable enterprise systems,
              optimize IT infrastructure, and accelerate digital transformation.
            </p>

            <div className="mt-10 flex justify-center">
              <Button as={Link} to="/contact">
                <Mail size={18} />
                Contact Me
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}

        <div
          className={clsx({
            "mt-20": !hideCTA,
          })}
        >
          <FooterNavigation />
        </div>

        {/* Social */}

        <div className="mt-10 flex justify-center gap-5">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:text-sky-400"
            >
              <FaLinkedin size={20} />
            </a>
          )}

          <a
            href="https://www.instagram.com/irfanm01"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:text-pink-400"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:text-emerald-400"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-400 md:flex-row">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <p>
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-white">{profile.name}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
