import PropTypes from "prop-types";
import {
  ArrowRight,
  Database,
  ImageOff,
  Table2,
  Waypoints,
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectDatabase({ project }) {
  if (!project.database) {
    return null;
  }

  const { image, tables = [], relationships = [] } = project.database;

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Database}
        badge="Database"
        title="Database Schema"
        description="Database structure, core entities, and relationships."
        color="emerald"
      />

      {/* ================= ERD ================= */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10">
        {image ? (
          <img
            src={image}
            alt={`${project.title} Database Schema`}
            className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-slate-900">
            <div className="text-center">
              <div className="mx-auto inline-flex rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                <ImageOff size={40} className="text-slate-500" />
              </div>

              <p className="mt-5 text-slate-400">
                Database schema is not available yet.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ================= Tables & Relationships ================= */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Main Tables */}
        <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-500/10">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500/15">
              <Table2
                size={22}
                className="text-emerald-400 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Main Tables
            </h3>
          </div>

          {tables.length ? (
            <div className="space-y-4">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 font-semibold tracking-wide text-emerald-300 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/20"
                >
                  {table.title}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No database tables available.</p>
          )}
        </article>

        {/* Relationships */}
        <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500/15">
              <Waypoints
                size={22}
                className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Relationships
            </h3>
          </div>

          {relationships.length ? (
            <div className="space-y-4">
              {relationships.map((relation) => (
                <div
                  key={relation.id}
                  className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/20"
                >
                  <ArrowRight size={18} className="shrink-0 text-cyan-400" />

                  <span className="font-medium text-cyan-300">
                    {relation.title}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No relationships available.</p>
          )}
        </article>
      </div>
    </section>
  );
}

ProjectDatabase.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,

    database: PropTypes.shape({
      image: PropTypes.string,

      tables: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ),

      relationships: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ),
    }),
  }).isRequired,
};
