import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allan Mathenge — Software Engineer & Designer",
  description: "Crafting elegant, scalable digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        {/* ✅ Sidebar handles both mobile and desktop */}
        <Sidebar />

        {/* ✅ Main container */}
        <div className="flex flex-col md:flex-row min-h-screen w-full">
          {/* Desktop Sidebar Spacer (only visible on large screens) */}
          <div className="hidden lg:block w-72 shrink-0" />

          {/* ✅ Main Content — flush & responsive */}
          <main
            className="
              flex-1 
              w-full 
              min-h-screen 
              overflow-y-auto 
              bg-white
              transition-all 
              duration-300 
              ease-in-out
              pt-5
              lg:pt-0
      
            "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
