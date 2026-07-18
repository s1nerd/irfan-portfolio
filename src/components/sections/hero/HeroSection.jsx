import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-x-hidden
        py-16
        sm:py-20
        lg:flex
        lg:min-h-svh
        lg:items-center
      "
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Background */}
      <div className="absolute -left-30 -top-30 h-96 w-96 rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="absolute -bottom-37.5 -right-25 h-105 w-105 rounded-full bg-violet-600/20 blur-[180px]" />

      <Container
        as="div"
        className="
          relative
          z-10
          grid
          items-center
          gap-16
          py-6
          sm:py-8
          lg:min-h-svh
          lg:grid-cols-2
          lg:gap-20
          lg:py-24
        "
      >
        <HeroContent />

        <HeroImage />
      </Container>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          lg:flex
        "
      >
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
