// types/project.ts
export type Project = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  tags: string[] | null;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  modalDescription?: string;
  popularity?: "Trending" | "Popular" | "Featured" | "New" | "Classic";
  img: {
    id: number;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};



export type HeroSectionType = {
  id: number;
  title: string;
  specialties: string[];
  mobile_image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  desktop_image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};
