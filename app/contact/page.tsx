// app/contact/page.tsx

import ContactClient from "@/components/contact/ContactClient";


export const metadata = {
  title: "Contact — Allan Mathenge",
  description: "Get in touch with Allan Mathenge. Connect via email, phone, or social media for collaborations and opportunities.",
  openGraph: {
    title: "Contact — Allan Mathenge",
    description: "Get in touch with Allan Mathenge. Connect via email, phone, or social media for collaborations and opportunities.",
    url: "https://allan-portfolio-website.vercel.app/contact",
    siteName: "Allan Mathenge",
    images: [
      {
        url: "https://allan-portfolio-website.vercel.app/_next/image?url=%2Fallanprofile.jpg&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "Allan Mathenge — Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}