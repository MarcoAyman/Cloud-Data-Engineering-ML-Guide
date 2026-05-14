import FlowDiagram from "@/src/components/FlowDiagram";
import { BookOpen, Cloud, Database, Network } from "lucide-react";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col bg-slate-100 font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 px-6 py-4 flex items-center justify-between shrink-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg border border-indigo-500/30">
            <Cloud className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-50">
              Cloud Data Engineering & ML Guide
            </h1>
            <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">
              Professional Reference Architectures
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Data Lakes</span>
          </div>
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-amber-400" />
            <span>ETL Pipelines</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span>Machine Learning</span>
          </div>
        </div>
      </header>

      {/* Main Content - Interactive Flow */}
      <main className="flex-1 w-full h-full overflow-y-auto">
        <div className="flex flex-col gap-8 p-6 md:p-10 min-h-max max-w-[1920px] mx-auto">
          
          {/* AWS Section */}
          <section className="w-full h-[800px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col">
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/20 p-1.5 rounded-md border border-amber-500/30">
                  <Cloud className="w-5 h-5 text-amber-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  AWS Reference Architecture
                </h2>
              </div>
              <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Amazon Web Services
              </div>
            </div>
            <div className="flex-1 relative">
              <FlowDiagram provider="aws" />
            </div>
          </section>

          {/* GCP Section */}
          <section className="w-full h-[800px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col">
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-1.5 rounded-md border border-blue-500/30">
                  <Cloud className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  GCP Reference Architecture
                </h2>
              </div>
              <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Google Cloud Platform
              </div>
            </div>
            <div className="flex-1 relative">
              <FlowDiagram provider="gcp" />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
