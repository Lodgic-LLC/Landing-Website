export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  client: string;
  year: string;
  duration: string;
  stack: string[];
  needs: string[];
  solutions: string[];
  metrics: Array<{ value: string; label: string }>;
  highlights: string[];
  challenge: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [];

export const getAllProjectSlugs = () => projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
