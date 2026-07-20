import { ArrowDown, CheckCircle2, ImageOff, Network } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectArchitectureDiagram({ project }) {
  if (!project.architectureDiagram) {
    return null;
  }

  const {
    image,
    overview,
    flow,
    principles = [],
  } = project.architectureDiagram;

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Network}
        badge="Architecture"
        title="Architecture Diagram"
        description="High-level visualization illustrating how the major components communicate across the system."
        color="cyan"
      />

      {/* ================= Architecture Image ================= */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {image ? (
          <img
            src={image}
            alt={`${project.title} Architecture Diagram`}
            className="w-full transition-transform duration-500 group-hover:scale-[1.015]"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-slate-900">
            <div className="text-center">
              <ImageOff size={56} className="mx-auto text-slate-600" />

              <p className="mt-5 text-slate-500">
                Architecture diagram is not available yet.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ================= Overview & Flow ================= */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Architecture Overview
          </h3>

          <p className="mt-5 leading-7 text-slate-300">{overview}</p>

          {principles.length > 0 && (
            <>
              <div className="my-8 h-px bg-linear-to-r from-cyan-500/40 via-cyan-400/10 to-transparent" />

              <h4 className="text-lg font-semibold text-white">
                Architecture Principles
              </h4>

              <div className="mt-6 space-y-4">
                {principles.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        size={22}
                        className="mt-0.5 shrink-0 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                      />

                      <div>
                        <h5 className="font-semibold text-cyan-300">
                          {item.title}
                        </h5>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </article>

        {/* ================= RIGHT ================= */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            System Flow
          </h3>

          <div className="mt-6 flex flex-col items-center">
            {flow?.map((step, index) => (
              <div key={step.id} className="flex w-full flex-col items-center">
                <div className="w-full rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4 text-center font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/15">
                  {step.title}
                </div>

                {index < flow.length - 1 && (
                  <ArrowDown
                    size={24}
                    className="my-4 text-cyan-500 transition-transform duration-300 group-hover:translate-y-1"
                  />
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
