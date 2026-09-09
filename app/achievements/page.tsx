// app/achievements/page.tsx

import AchievementsClient from "@/components/achievement/AchievementsClient";


export const metadata = {
  title: "Achievements — Allan Mathenge",
  description: "Explore Allan Mathenge's achievements, awards, certifications, and professional recognitions.",
  openGraph: {
    title: "Achievements — Allan Mathenge",
    description: "Explore Allan Mathenge's achievements, awards, certifications, and professional recognitions.",
    url: "https://allan-portfolio-website.vercel.app/achievements",
    siteName: "Allan Mathenge",
    images: [
      {
        url: "https://allan-portfolio-website.vercel.app/_next/image?url=%2Fallanprofile.jpg&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "Allan Mathenge — Achievements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}