"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  name: string;
  href: string;
  icon?: React.ReactNode; // ✅ new prop for icons
  onClick?: () => void;
}

export default function SidebarItem({ name, href, icon, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
      }`}
    >
      {/* ✅ Show icon before text */}
      {icon && <span className="text-blue-600">{icon}</span>}
      <span>{name}</span>
    </Link>
  );
}
