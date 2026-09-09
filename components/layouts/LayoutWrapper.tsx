"use client";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      {children}
    </div>
  );
}