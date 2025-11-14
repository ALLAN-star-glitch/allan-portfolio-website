import { HeroSectionType } from "./types";

/**
 * Generic fetch helper for Strapi REST API
 */
export async function fetchFromStrapi(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    next: { revalidate: 60 }, // Optional: ISR (revalidate every 60s)
  });

  if (!res.ok) {
    console.error(`Failed to fetch ${endpoint}:`, res.statusText);
    throw new Error(`Strapi request failed: ${endpoint}`);
  }

  return res.json();
}

/**
 * Fetch Featured Projects
 */
export async function getFeaturedProjects() {
  const data = await fetchFromStrapi("featured-projs?populate=*");
  return data.data; // Strapi returns { data, meta }
}

/**
 * Fetch Projects with Pagination
 */
export async function getProjects(page: number = 1, pageSize: number = 6) {
  const data = await fetchFromStrapi(
    `projects?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`
  );
  return data; // Strapi returns { data, meta }
}


/**
 * Fetch Hero Section content
 */
export async function getHeroSection(): Promise<HeroSectionType | null> {
  const data = await fetchFromStrapi("hero-section?populate=*");
  return data?.data || null;
}