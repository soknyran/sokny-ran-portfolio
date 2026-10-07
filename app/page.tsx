import { About } from "@/components/sections/About";
import { AIDevelopment } from "@/components/sections/AIDevelopment";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { siteConfig, siteUrl } from "@/lib/site";

// Structured data so search engines can identify the person behind the site.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.currentRole,
  description: siteConfig.description,
  url: siteUrl,
  worksFor: { "@type": "Organization", name: profile.currentCompany },
  address: { "@type": "PostalAddress", addressLocality: "Phnom Penh", addressCountry: "KH" },
  sameAs: socialLinks.filter((link) => link.kind !== "email").map((link) => link.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AIDevelopment />
      <Education />
      <Contact />
    </>
  );
}
