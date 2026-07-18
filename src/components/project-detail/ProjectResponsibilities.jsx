import {
  BriefcaseBusiness,
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
    title: "Business Process Analysis",
    description:
      "Analyzed existing operational workflows, identified pain points, and translated business requirements into scalable software solutions.",
  },
  {
    id: 2,
    icon: Workflow,
    title: "System Architecture",
    description:
      "Designed a modular application architecture, defined development standards, and planned the integration between all core modules.",
  },
  {
    id: 3,
    icon: Database,
    title: "Database Design",
    description:
      "Designed relational database structures, business entities, and data relationships to support enterprise-scale operations.",
  },
  {
    id: 4,
    icon: ServerCog,
    title: "Backend Development",
    description:
      "Developed RESTful APIs, authentication, authorization, business logic, and reusable backend services using a modular architecture.",
  },
  {
    id: 5,
    icon: LayoutDashboard,
    title: "Frontend Development",
    description:
      "Built responsive user interfaces, reusable React components, dashboards, forms, and enterprise application workflows.",
  },
  {
    id: 6,
    icon: Code2,
    title: "Deployment & Maintenance",
    description:
      "Performed testing, deployment, production maintenance, bug fixing, and continuous feature enhancement based on business needs.",
  },
];

export default function ProjectResponsibilities() {
  return (
    <section className="space-y-10">
      <SectionHeader
        icon={BriefcaseBusiness}
        badge="My Contribution"
        title="Project Responsibilities"
        description="End-to-end responsibilities throughout the software development lifecycle, from business analysis to deployment and continuous maintenance."
        color="violet"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {responsibilities.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/5"
            >
              <div className="mb-6 inline-flex rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3">
                <Icon
                  size={24}
                  className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">{item.title}</h3>

              <p className="mt-4 leading-8 text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
