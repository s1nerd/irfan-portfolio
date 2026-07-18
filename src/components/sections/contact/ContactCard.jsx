import clsx from "clsx";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import Button from "@/components/common/Button";
import GlassCard from "@/components/common/GlassCard";
import contact from "@/data/contact/contact";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

export default function ContactCard() {
  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio Inquiry - Irfan Maulana");

    const body = encodeURIComponent(`Hello Irfan,

    I found your portfolio and would like to discuss an opportunity with you.

    Best regards,`);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${subject}&body=${body}`,
      "_blank",
    );
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Irfan,

    I found your portfolio through your website and would like to discuss an opportunity with you.

    Best regards,`);

    window.open(`https://wa.me/6287738003875?text=${message}`, "_blank");
  };

  return (
    <GlassCard className="p-10">
      <header>
        <h3 className="text-3xl font-bold text-white">Let's Connect</h3>

        <p className="mt-4 leading-8 text-slate-300">
          I'm always open to discussing new opportunities, interesting projects,
          enterprise system development, and technology collaboration.
        </p>
      </header>

      {/* Contact Information */}
      <section className="mt-10 space-y-6">
        <div className="flex items-center gap-4">
          <Mail size={22} className="text-blue-400" />

          <div>
            <p className="text-sm text-slate-400">Email</p>

            <p className="font-medium text-white">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone size={22} className="text-emerald-400" />

          <div>
            <p className="text-sm text-slate-400">Phone</p>

            <p className="font-medium text-white">{contact.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MapPin size={22} className="text-violet-400" />

          <div>
            <p className="text-sm text-slate-400">Location</p>

            <p className="font-medium text-white">{contact.location}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 flex flex-wrap gap-4">
        <Button
          type="button"
          onClick={handleSendEmail}
          className="flex items-center gap-2"
        >
          <Mail size={18} />
          <span>Send Email</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={handleWhatsApp}
          className="flex items-center gap-2"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </Button>
      </section>

      {/* Social Media */}
      <footer className="mt-10 flex flex-wrap justify-center gap-4">
        {contact.socials?.map((social) => {
          const Icon = iconMap[social.name];

          if (!Icon) return null;

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={clsx(
                "rounded-xl border border-white/10 bg-white/5 p-3",
                "transition-all duration-300",
                "hover:-translate-y-1",
                "hover:border-blue-500/30",
                "hover:bg-white/10",
              )}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </footer>
    </GlassCard>
  );
}
