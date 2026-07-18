import { ImageIcon, MonitorSmartphone } from "lucide-react";

export default function ProjectPlaceholder({ title, subtitle }) {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-3xl border-b border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <MonitorSmartphone size={42} className="text-blue-400" />
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">
          {subtitle}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-white/20 px-4 py-2 text-sm text-slate-500">
          <ImageIcon size={16} />

          <span>Project Preview Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
