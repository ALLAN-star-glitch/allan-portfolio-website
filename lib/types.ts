// types/project.ts
export type Project = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  tags: string[] | null;
  githubUrl?: string;
  liveUrl?: string;
  image?: {
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
