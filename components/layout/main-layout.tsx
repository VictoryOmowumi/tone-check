"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "../../lib/utils";
import { Sidebar } from "./sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#131314] text-slate-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 hover:border-white/20 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={18} />
            Menu
          </button>
        </header>

        <main
          className={cn(
            "flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-12",
            isSidebarOpen && "lg:pl-0"
          )}
        >
          {children}
        </main>
      </div>

      {isSidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation overlay"
        />
      ) : null}
    </div>
  );
}
