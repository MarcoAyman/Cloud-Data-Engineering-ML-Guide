import { Handle, Position } from "@xyflow/react";
import { cn } from "@/src/lib/utils";
import { LucideIcon } from "lucide-react";

export type PipelineNodeData = {
  title: string;
  description: string;
  items: { name: string; usage?: string; type?: string; icon: LucideIcon }[];
  theme?: string;
};

const themeMap: Record<string, { border: string; bg: string; text: string; lightBg: string; gradient: string }> = {
  slate: { border: 'border-slate-300', bg: 'bg-slate-600', text: 'text-slate-700', lightBg: 'bg-slate-100', gradient: 'from-slate-600 to-slate-800' },
  blue: { border: 'border-blue-300', bg: 'bg-blue-600', text: 'text-blue-700', lightBg: 'bg-blue-50', gradient: 'from-blue-500 to-blue-700' },
  emerald: { border: 'border-emerald-300', bg: 'bg-emerald-600', text: 'text-emerald-700', lightBg: 'bg-emerald-50', gradient: 'from-emerald-500 to-emerald-700' },
  amber: { border: 'border-amber-300', bg: 'bg-amber-600', text: 'text-amber-700', lightBg: 'bg-amber-50', gradient: 'from-amber-500 to-amber-700' },
  purple: { border: 'border-purple-300', bg: 'bg-purple-600', text: 'text-purple-700', lightBg: 'bg-purple-50', gradient: 'from-purple-500 to-purple-700' },
  rose: { border: 'border-rose-300', bg: 'bg-rose-600', text: 'text-rose-700', lightBg: 'bg-rose-50', gradient: 'from-rose-500 to-rose-700' },
  indigo: { border: 'border-indigo-300', bg: 'bg-indigo-600', text: 'text-indigo-700', lightBg: 'bg-indigo-50', gradient: 'from-indigo-500 to-indigo-700' },
  red: { border: 'border-red-300', bg: 'bg-red-600', text: 'text-red-700', lightBg: 'bg-red-50', gradient: 'from-red-500 to-red-700' },
  cyan: { border: 'border-cyan-300', bg: 'bg-cyan-600', text: 'text-cyan-700', lightBg: 'bg-cyan-50', gradient: 'from-cyan-500 to-cyan-700' },
  orange: { border: 'border-orange-300', bg: 'bg-orange-600', text: 'text-orange-700', lightBg: 'bg-orange-50', gradient: 'from-orange-500 to-orange-700' },
  fuchsia: { border: 'border-fuchsia-300', bg: 'bg-fuchsia-600', text: 'text-fuchsia-700', lightBg: 'bg-fuchsia-50', gradient: 'from-fuchsia-500 to-fuchsia-700' },
};

export function PipelineNode({ data }: { data: PipelineNodeData }) {
  const theme = themeMap[data?.theme || "slate"] || themeMap.slate;

  return (
    <div
      className={cn(
        "w-80 rounded-2xl border bg-white shadow-xl shadow-slate-200/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60",
        theme.border,
      )}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-slate-300 border-2 border-white"
      />

      <div
        className={cn(
          "px-5 py-4 text-white bg-gradient-to-br",
          theme.gradient,
        )}
      >
        <h3 className="font-bold text-lg tracking-tight drop-shadow-sm">{data?.title || "Unknown Node"}</h3>
        <p className="text-xs text-white/80 font-medium mt-0.5">{data?.description || ""}</p>
      </div>

      <div className="p-4 flex flex-col gap-3 bg-slate-50/80">
        {data?.items?.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex gap-3 items-start bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
            >
              <div
                className={cn(
                  "p-2 rounded-lg shadow-inner",
                  theme.lightBg,
                  theme.text,
                )}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h4 className="font-semibold text-sm text-slate-800 truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 leading-snug mt-1">
                  {item.usage || item.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-slate-300 border-2 border-white"
      />
    </div>
  );
}
