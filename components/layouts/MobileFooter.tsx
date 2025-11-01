"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function MobileFooter() {
  return (
    <footer className="lg:hidden bg-white/95 border-t border-gray-200 shadow-inner py-6 px-5">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">Allan Mathenge</h2>
          <p className="text-sm text-gray-500">Software Engineer & Designer</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-500" />
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <span>allanmathenge@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-3">
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
        <div className="flex gap-4 mt-3">
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
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-gray-400">•</span>
          <span>Allan Mathenge</span>
        </div>
      </div>
    </footer>
  );
}
