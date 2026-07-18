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
        description="Screenshots highlighting key interfaces and workflows throughout the application."
        color="pink"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {project.gallery.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30"
          >
            <div className="flex aspect-video items-center justify-center bg-slate-900">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <ImageIcon size={48} className="text-slate-600" />
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
