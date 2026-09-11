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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1120] text-white h-full overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
          {/* Sidebar (fixed on desktop, hidden on mobile) */}
          <Sidebar />

          {/* Desktop Sidebar Spacer */}
          <div className="hidden lg:block w-72 shrink-0" />

          {/* Main scroll container */}
          <main
            id="main-scroll"
            className="
              flex-1
              h-screen
              w-full
              overflow-y-auto
              overflow-x-hidden
              overscroll-contain
              bg-[#0B1120]
              scroll-smooth
              transition-all
              duration-300
              ease-in-out
            "
          >
            {children}
            <MobileFooter />
          </main>
        </div>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JLGC0GH6Y8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JLGC0GH6Y8');
          `}
        </Script>

        {/* Tawk.to Live Chat */}
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