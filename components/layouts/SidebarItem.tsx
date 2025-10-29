"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  name: string;
  href: string;
  onClick?: () => void; // ✅ Add this line
}

export default function SidebarItem({ name, href, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick} // ✅ Pass it safely
      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
      }`}
    >
      {name}
    </Link>
  );
}
