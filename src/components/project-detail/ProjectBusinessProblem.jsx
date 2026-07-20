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
        description="Challenges before the system was implemented."
        color="amber"
      />

      {/* Business Context */}
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3">
            <Building2 className="text-amber-400" size={22} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Business Context</h3>

            <p className="text-sm text-slate-400">
              Initial business conditions.
            </p>
          </div>
        </div>

        <p className="max-w-4xl leading-8 text-slate-300">{context}</p>
      </article>

      {/* Workflow & Challenges */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Workflow */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <GitBranch className="text-cyan-400" size={22} />

            <h3 className="text-xl font-bold text-white">Existing Workflow</h3>
          </div>

          <div className="space-y-3">
            {workflow.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4"
              >
                <span className="mt-1 text-cyan-400 font-bold">
                  {index + 1}.
                </span>

                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Challenges */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <CircleAlert className="text-amber-400" size={22} />

            <h3 className="text-xl font-bold text-white">Key Challenges</h3>
          </div>

          <div className="space-y-3">
            {challenges.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-4"
              >
                <CircleAlert
                  size={16}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      {/* Impact */}
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-3">
          <TrendingDown className="text-red-400" size={22} />

          <div>
            <h3 className="text-xl font-bold text-white">Business Impact</h3>

            <p className="text-sm text-slate-400">
              Consequences if no solution was implemented.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {impacts.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 transition hover:border-red-400/40 hover:bg-red-500/15"
            >
              <TrendingDown size={16} className="mt-1 shrink-0 text-red-400" />

              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
