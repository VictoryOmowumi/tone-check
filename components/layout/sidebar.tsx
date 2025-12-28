import type { ReactNode } from "react";
import { History, Plus, Settings } from "lucide-react";

import { cn } from "../../lib/utils";

export interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  footer?: ReactNode;
}

const historyItems = [
  "Slack update check",
  "Client follow-up",
  "Project status note",
  "Performance review draft",
  "Team reminder",
];

export function Sidebar({ isOpen, onClose, footer }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-[#131314] px-4 pb-6 pt-5 text-sm text-slate-100 transition-transform duration-300 lg:static lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between px-1">
        <span className="text-base font-semibold tracking-tight">ToneCheck</span>
        <button
          type="button"
          className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-200 hover:border-white/20 hover:text-white lg:hidden"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-[#131314] hover:bg-white"
      >
        <Plus size={16} />
        New Analysis
      </button>

      <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        <History size={14} />
        History
      </div>
      <div className="mt-3 flex-1 space-y-1 overflow-y-auto pr-1">
        {historyItems.map((item) => (
          <button
            key={item}
            type="button"
            className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-gray-100 hover:bg-white/5 rounded-full transition-all truncate"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {footer ?? (
          <button
            type="button"
            className="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:border-white/20 hover:bg-white/10"
          >
            Settings
            <Settings size={16} />
          </button>
        )}
      </div>
    </aside>
  );
}
