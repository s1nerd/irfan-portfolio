import {
  AlertTriangle,
  Building2,
  CircleAlert,
  GitBranch,
  TrendingDown,
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectBusinessProblem({ project }) {
  if (!project.businessProblem) {
    return null;
  }

  const {
    context,
    workflow = [],
    challenges = [],
    impacts = [],
  } = project.businessProblem;

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={AlertTriangle}
        badge="Business Analysis"
        title="Business Problem"
        description="Understanding the operational challenges and business context before the implementation of the system."
        color="amber"
      />

      {/* ================= Business Context ================= */}
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3">
            <Building2 size={22} className="text-amber-400" />
          </div>

          <h3 className="text-2xl font-bold text-white">Business Context</h3>
        </div>

        <p className="leading-8 text-slate-300">{context}</p>
      </article>

      {/* ================= Workflow & Challenges ================= */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Existing Workflow */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <GitBranch className="text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">Existing Workflow</h3>
          </div>

          <div className="space-y-4">
            {workflow.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 text-cyan-300"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        {/* Challenges */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <CircleAlert className="text-amber-400" />

            <h3 className="text-2xl font-bold text-white">Key Challenges</h3>
          </div>

          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-4 text-amber-300"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>

      {/* ================= Business Impact ================= */}
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-3">
          <TrendingDown className="text-red-400" />

          <h3 className="text-2xl font-bold text-white">Business Impact</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {impacts.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-300"
            >
              {item}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
