import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  LayoutDashboard,
  ServerCog,
  Workflow,
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

const responsibilities = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Business Analysis",
    description: "Analyze business requirements and operational workflows.",
  },
  {
    id: 2,
    icon: Workflow,
    title: "System Architecture",
    description: "Design scalable application architecture and modules.",
  },
  {
    id: 3,
    icon: Database,
    title: "Database Design",
    description: "Design relational databases and data models.",
  },
  {
    id: 4,
    icon: ServerCog,
    title: "Backend Development",
    description: "Develop REST APIs, authentication, and business logic.",
  },
  {
    id: 5,
    icon: LayoutDashboard,
    title: "Frontend Development",
    description: "Build responsive interfaces and reusable components.",
  },
  {
    id: 6,
    icon: Code2,
    title: "Deployment & Maintenance",
    description: "Deploy, maintain, and continuously improve the system.",
  },
];

export default function ProjectResponsibilities() {
  return (
    <section className="space-y-10">
      <SectionHeader
        icon={BriefcaseBusiness}
        badge="Contribution"
        title="Project Responsibilities"
        description="Key responsibilities throughout the project lifecycle."
        color="violet"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {responsibilities.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3">
                  <Icon
                    size={24}
                    className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <CheckCircle2
                  size={18}
                  className="text-violet-400 opacity-70"
                />
              </div>

              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
