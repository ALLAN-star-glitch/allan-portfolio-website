import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";

export default function MobileFooter() {
  return (
    <footer className="lg:hidden bg-white/95 border-t border-gray-200 shadow-inner py-6 px-5">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">Allan Mathenge</h2>
          <p className="text-sm text-gray-500">Software Engineer & Designer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-2">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          &copy; {new Date().getFullYear()} Allan Mathenge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
