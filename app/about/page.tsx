// app/about/page.tsx

import AboutClient from "@/components/about/AboutClient";


export const metadata = {
  title: "About Me — Allan Mathenge",
  description: "Learn about Allan Mathenge, a full-stack developer and product designer with 3+ years of experience building scalable applications.",
};

export default function AboutPage() {
  return <AboutClient />;
}