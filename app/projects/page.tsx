// app/projects/page.tsx

import ProjectsClient from "@/components/projects/ProjectsClient";
import { allProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Allan Mathenge",
  description: "Explore Allan Mathenge's portfolio of projects including full-stack applications, mobile apps, and backend APIs.",
  openGraph: {
    title: "Projects — Allan Mathenge",
    description: "Explore Allan Mathenge's portfolio of projects including full-stack applications, mobile apps, and backend APIs.",
    url: "https://allan-portfolio-website.vercel.app/projects",
    siteName: "Allan Mathenge",
    images: [
      {
        url: "https://allan-portfolio-website.vercel.app/_next/image?url=%2Fallanprofile.jpg&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "Allan Mathenge — Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}