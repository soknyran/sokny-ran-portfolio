export type SocialKind = "linkedin" | "github" | "facebook" | "instagram" | "threads" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  /** Short display value, e.g. the handle or the address. */
  display: string;
}

export interface Stat {
  /** Short headline value, e.g. a year or a count. */
  value: string;
  /** Full statement of what the value means; must stand on its own. */
  label: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  /** One-line positioning statement shown under the title. */
  tagline: string;
  /** Areas of work listed in the hero. */
  focusAreas: string[];
  /** Two or three sentences shown under the tagline in the hero. */
  heroSummary: string;
  location: string;
  currentRole: string;
  currentCompany: string;
  /** Short status badges shown above the name in the Hero. */
  currentFocus: string[];
  email: string;
  resumeUrl: string;
  resumeFileName: string;
  about: string[];
  /** One-line subtitle under the About heading. */
  aboutLead: string;
  /** Principle cards in the About section. */
  aboutHighlights: { title: string; description: string }[];
  stats: Stat[];
  /** Spoken languages, as listed on the resume. */
  languages: string[];
  contactTopics: string[];
}

export interface ResponsibilityGroup {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  companyFullName?: string;
  position: string;
  employment: string;
  start: string;
  end: string;
  location: string;
  workMode: string;
  /** Optional lead paragraph shown above the responsibilities. */
  summary?: string;
  responsibilities: ResponsibilityGroup[];
}

export type ProjectStatus =
  | "Production · Active Maintenance"
  | "UAT · Active Development"
  | "Production · Previous Responsibility";

export interface TitledText {
  title: string;
  detail: string;
}

export interface ArchitectureLayer {
  name: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  type: string;
  status: ProjectStatus;
  role: string;
  featured: boolean;
  summary: string;
  overview: string;
  context: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  /** The few main technologies shown on the homepage card. */
  tags: string[];
  /** Full technology list for the case-study page. */
  technologies: string[];
  achievements: string[];
  challenges: TitledText[];
  decisions: TitledText[];
  lessons: string[];
  architecture: {
    caption: string;
    layers: ArchitectureLayer[];
  };
  /** Grouped technology stack for the case study, e.g. legacy vs modern. */
  stacks?: { label: string; items: string[] }[];
  /** Optional delivery workflow shown as a step sequence. */
  workflow?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  /** Degree or program, as it should read, e.g. "Bachelor’s Degree, Information Technology". */
  credential: string;
  start: string;
  end: string;
  /** Optional short public description of the institution (website only, not the resume). */
  description?: string;
}

export interface AIWorkflow {
  statement: string;
  steps: { title: string; description: string }[];
  tools: { name: string; description: string }[];
  principles: TitledText[];
}
