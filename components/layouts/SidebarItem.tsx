"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SidebarItemProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function SidebarItem({ name, href, icon, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          group flex items-center gap-3
          px-5 py-3.5
          rounded-xl font-medium
          transition-all duration-300
          backdrop-blur-md
          border border-transparent
          ${isActive
            ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200/30"
            : "bg-white/60 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-md hover:shadow-blue-100/40 hover:text-blue-700"
          }
        `}
      >
        {icon && (
          <span
            className={`
              text-xl transition-all duration-300
              ${isActive ? "text-white" : "text-blue-600 group-hover:text-blue-700"}
            `}
          >
            {icon}
          </span>
        )}
        <span className="text-base tracking-wide">{name}</span>
      </Link>
    </motion.div>
  );
}
