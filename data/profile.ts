import type { Profile } from "@/types";

/**
 * Personal information — edit this file to update the site.
 *
 * Social profiles live in data/social.ts.
 *
 * Still to do before publishing:
 *   - NEXT_PUBLIC_SITE_URL (your domain, see .env.example)
 */
export const profile: Profile = {
  name: "Sokny Ran",
  initials: "SR",
  title: "Software Engineer | Full-Stack Developer | AI-Assisted Development",
  tagline:
    "Building and modernizing enterprise financial applications with Java, Spring Boot, Next.js, PostgreSQL, and AI-assisted engineering.",
  focusAreas: [
    "Backend",
    "Frontend",
    "Database",
    "System analysis",
    "Integration",
    "Deployment",
    "Production support",
    "Legacy modernization",
  ],
  heroSummary:
    "I lead the development of WeCMS, an integrated Cash Management System for mid-sized and large enterprises in Vietnam: the JexFrame version runs in production, and its Spring Boot and Next.js modernization is in UAT. Before that, I developed and maintained WABOOKS, WABOOKS TA, and JexAdmin, which are running in production.",
  location: "Phnom Penh, Cambodia",
  currentRole: "Software Engineer",
  currentCompany: "KOSIGN",
  currentFocus: ["WeCMS Legacy · Production Maintenance & Development", "New WeCMS · UAT · Spring Boot + Next.js"],
  email: "soknyran.dev@gmail.com",
  resumeUrl: "/resume/sokny-ran-resume.pdf",
  resumeFileName: "Sokny-Ran-Resume.pdf",
  about: [
    "Software Engineer specializing in enterprise web applications, financial systems, and AI-assisted software modernization. Experienced in full-stack development using Java, Spring Boot, Next.js, TypeScript, JavaScript, PostgreSQL, HTML, CSS, and RESTful APIs.",
    "Lead the development of WeCMS, an integrated Cash Management System (CMS) for mid-sized and large enterprises in Vietnam. The legacy JexFrame-based version is currently running in production and continues to be actively maintained through new feature development, bug fixes, and urgent customer requests from the Product Owner team.",
    "I am also leading the modernization of WeCMS to Spring Boot and Next.js. The modernized version is currently deployed to UAT, and I use Claude Code and other AI tools throughout the development lifecycle—from legacy system analysis and solution design to implementation, testing, debugging, and refactoring.",
    "Previously developed and maintained WABOOKS, WABOOKS TA, and JexAdmin, which are currently running in production.",
    "Passionate about building scalable, secure, and high-performance software, solving complex technical challenges, and leveraging AI to accelerate software development while maintaining code quality and engineering best practices.",
  ],
  aboutLead: "Enterprise financial systems: cash management, payments, approval workflows, bank and ERP integration.",
  aboutHighlights: [
    {
      title: "Full lifecycle ownership",
      description: "From requirement analysis and design to deployment and production support.",
    },
    {
      title: "Legacy modernization",
      description: "Moving a live JexFrame platform to Spring Boot and Next.js without breaking it.",
    },
    {
      title: "AI-assisted engineering",
      description:
        "Claude Code and MCP in daily analysis, implementation, and review work, with an engineer accountable for every change.",
    },
  ],
  // Stats row under the hero. Every value restates a fact found elsewhere on the site,
  // and each label says exactly what the value means.
  stats: [
    { value: "2021", label: "Year I started building enterprise software" },
    { value: "3", label: "Platforms in production: WeCMS, WABOOKS, JexAdmin" },
    { value: "3", label: "Countries collaborated across: Korea, Vietnam, Cambodia" },
    { value: "In UAT", label: "WeCMS modernization to Spring Boot + Next.js" },
  ],
  languages: ["Khmer", "English"],
  contactTopics: [
    "Software engineering opportunities",
    "Full-stack development",
    "Enterprise systems",
    "Modernization projects",
    "AI-assisted engineering",
    "Technical collaboration",
  ],
};
