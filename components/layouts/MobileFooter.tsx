"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function MobileFooter() {
  return (
    <footer className="lg:hidden bg-[#0F172A]/95 backdrop-blur-md border-t border-white/5 py-6 px-5">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">Allan Mathenge</h2>
          <p className="text-sm text-gray-400">Software Engineer &amp; QA</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-400 mt-2">
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>+254740955111</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>allanmathenge67@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-4 border-t border-white/5 pt-4 w-full">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-gray-600">•</span>
          <span>Allan Mathenge</span>
        </div>
      </div>
    </footer>
  );
}