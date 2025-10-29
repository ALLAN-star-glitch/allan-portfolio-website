"use client";

import { useState } from "react";
import Sidebar from "@/components/layouts/Sidebar";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import { Menu, X } from "lucide-react";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full bg-white border-r shadow-md transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-72 w-64`}
      >
        <Sidebar />
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-72">
        {/* Header (for mobile) */}
        <header className="p-4 flex items-center justify-between border-b md:hidden bg-white sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
            className="text-gray-700"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="font-semibold text-lg">Allan Mathenge</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
      </div>
    </div>
  );
}
