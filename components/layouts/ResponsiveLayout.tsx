"use client";

import Sidebar from "@/components/layouts/Sidebar";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B1120]">
      {/* Sidebar handles everything - desktop, mobile header, mobile drawer */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-72">
        <main className="flex-1 pt-16 lg:pt-0 overflow-y-auto">
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
      </div>
    </div>
  );
}