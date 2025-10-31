"use client";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-linear-to-b from-white to-[#f9fafc]">
      {children}
    </div>
  );
}
