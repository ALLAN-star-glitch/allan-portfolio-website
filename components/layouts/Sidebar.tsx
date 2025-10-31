"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-linear-to-b from-white to-blue-50 border-r border-gray-200 flex-col justify-between shadow-md z-40">
        {/* Top Section */}
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mt-12 px-6 text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/allanprofile.jpg"
                alt="Allan Mathenge"
                width={120}
                height={120}
                className="object-cover"
                priority
              />
            </div>

            <h1 className="mt-5 text-xl font-bold text-gray-900 tracking-tight">
              Allan Mathenge
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Software Engineer & Designer
            </p>

            <div className="w-12 h-0.5 bg-blue-200 mt-4 rounded-full" />

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-5">
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
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-10 space-y-1 px-6">
            {navLinks.map((link) => (
              <SidebarItem key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mb-6">
          <p className="font-semibold text-gray-700 mb-1">
            © {new Date().getFullYear()}
          </p>
          <p className="text-gray-400 tracking-wide">Allan Mathenge</p>
        </div>
      </aside>

      {/* ===== Mobile & Medium Navbar ===== */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50 flex items-center justify-between px-5 py-3">
        {/* Left: Initials */}
        <Link
          href="/"
          className="text-xl font-bold text-[#2979FF] tracking-tight"
        >
          AM
        </Link>

        {/* Center: Full Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-900 font-semibold text-lg tracking-tight">
          Allan Mathenge
        </div>

        {/* Right: Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* ===== Mobile Overlay ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-linear-to-b from-white to-blue-50 border-r border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full py-10 px-6">
          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/allanprofile.jpg"
                alt="Allan Mathenge"
                width={100}
                height={100}
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-4 text-lg font-bold text-gray-900">
              Allan Mathenge
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Software Engineer & Designer
            </p>

            <div className="flex justify-center space-x-4 mt-4">
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
          </div>

          {/* Navigation */}
          <nav className="flex flex-col mt-8 space-y-1">
            {navLinks.map((link) => (
              <SidebarItem
                key={link.name}
                name={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-10">
            <p className="font-semibold text-gray-700 mb-1">
              © {new Date().getFullYear()}
            </p>
            <p className="text-gray-400 tracking-wide">Allan Mathenge</p>
          </div>
        </div>
      </aside>
    </>
  );
}
