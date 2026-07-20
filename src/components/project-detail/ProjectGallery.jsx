import { ImageIcon } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectGallery({ project }) {
  if (!project.gallery?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={ImageIcon}
        badge="Project Showcase"
        title="Gallery"
        description="Explore the main interfaces of the application."
        color="pink"
      />

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {project.gallery.map((item, index) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/10"
          >
            {/* Screenshot */}
            <div className="relative aspect-video overflow-hidden bg-slate-900">
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ImageIcon size={48} className="text-slate-600" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              {item.description && (
                <p className="line-clamp-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
