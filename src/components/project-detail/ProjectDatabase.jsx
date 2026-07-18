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
        badge="Database Design"
        title="Database Schema"
        description="Overview of the database structure, major entities, and relationships that support the application's business processes."
        color="emerald"
      />

      {/* ================= ERD ================= */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl">
        {image ? (
          <img
            src={image}
            alt={`${project.title} Database Schema`}
            className="w-full object-cover"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-slate-900">
            <div className="text-center">
              <ImageOff size={56} className="mx-auto text-slate-600" />

              <p className="mt-5 text-slate-500">
                Database schema is not available yet.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ================= Tables & Relationships ================= */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Main Tables */}
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Table2 className="text-emerald-400" />

            <h3 className="text-2xl font-bold text-white">Main Tables</h3>
          </div>

          {tables.length ? (
            <div className="space-y-4">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 font-medium text-emerald-300"
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
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Waypoints className="text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">Relationships</h3>
          </div>

          {relationships.length ? (
            <div className="space-y-4">
              {relationships.map((relation) => (
                <div
                  key={relation.id}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4"
                >
                  <ArrowRight size={18} className="text-cyan-400" />

                  <span className="text-cyan-300">{relation.title}</span>
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
