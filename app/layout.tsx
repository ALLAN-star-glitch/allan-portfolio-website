import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import MobileFooter from "@/components/layouts/MobileFooter";
import Script from "next/script"; 

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
  openGraph: {
    title: "Allan Mathenge — Software Engineer & Designer",
    description: "Crafting elegant, scalable digital experiences.",
    url: "https://allan-portfolio-website.vercel.app", 
    siteName: "Allan Mathenge",
    images: [
      {
        url: "https://allan-portfolio-website.vercel.app/_next/image?url=%2Fallanprofile.jpg&w=256&q=75", 
        width: 1200,
        height: 630,
        alt: "Allan Mathenge — Software Engineer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Allan Mathenge — Software Engineer & Designer",
  //   description: "Crafting elegant, scalable digital experiences.",
  //   images: ["https://www.yourdomain.com/og-image.png"], // Replace with your OG image
  //   creator: "@YourTwitterHandle", // Optional
  // },
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
            <MobileFooter/>
          </main>
          
        </div>

        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69062f95a8581d194d6f4550/1j902jot4';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}

          
        />
      </body>
    </html>
  );
}
