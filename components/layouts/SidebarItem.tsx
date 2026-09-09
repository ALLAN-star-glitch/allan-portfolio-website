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
      className="mb-1.5 last:mb-0"
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          group flex items-center gap-3
          px-5 py-3.5
          rounded-xl font-medium
          transition-all duration-300
          backdrop-blur-sm
          border
          ${isActive
            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
            : "bg-white/5 text-gray-400 border-white/5 hover:border-cyan-500/30 hover:bg-white/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5"
          }
        `}
      >
        {icon && (
          <span
            className={`
              text-xl transition-all duration-300
              ${isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"}
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