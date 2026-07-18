import { BadgeCheck, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import Container from "@/components/layout/Container";
import Button from "@/components/common/Button";

import contact from "@/data/contact/contact";
import profile from "@/data/profile/profile";

export default function Contact() {
  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio Inquiry - Irfan Maulana");

    const body = encodeURIComponent(`Hello Irfan,

I found your portfolio through your website and would like to discuss an opportunity with you.

Best regards,`);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`,
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
    <main className="py-24 pb-32">
      <Container className="max-w-5xl">
        <section className="space-y-14">
          {/* Header */}
          <header className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contact
            </span>

            <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
              Let's Connect
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
              Interested in collaborating, discussing a project, or exploring
              new opportunities? Feel free to reach out through any of the
              contact methods below.
            </p>
          </header>

          {/* Contact Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">Email</p>

                  <p className="font-semibold text-white">{profile.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-400" />

                <div>
                  <p className="text-sm text-slate-400">Phone</p>

                  <p className="font-semibold text-white">{profile.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <MapPin className="text-pink-400" />

                <div>
                  <p className="text-sm text-slate-400">Location</p>

                  <p className="font-semibold text-white">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <BadgeCheck className="text-cyan-400" />

                <div>
                  <p className="text-sm text-slate-400">Availability</p>

                  <p className="font-semibold text-white">
                    {contact.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white">Connect With Me</h2>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="https://github.com/s1nerd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition hover:border-blue-500/30 hover:text-white"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/irfan-maulana-401990289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition hover:border-blue-500/30 hover:text-white"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/irfanm01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition hover:border-blue-500/30 hover:text-white"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button type="button" onClick={handleSendEmail}>
                <Mail size={18} />
                Send Email
              </Button>

              <Button type="button" variant="outline" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
}
