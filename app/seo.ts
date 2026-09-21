export const siteConfig = {
  name: "Anuj Rastogi",
  title: "Anuj Rastogi | Software Engineer, Data Analyst, Security Builder",
  shortTitle: "Anuj Rastogi",
  url: "https://anujrastogi.in",
  description:
    "Portfolio of Anuj Rastogi, a software engineer and data analyst building full-stack products, analytics systems, security tooling, and AI-assisted engineering workflows.",
  locale: "en_US",
  keywords: [
    "Anuj Rastogi",
    "software engineer",
    "developer",
    "data analyst",
    "portfolio",
    "Python developer",
    "Django developer",
    "MERN stack developer",
    "Power BI",
    "cybersecurity analytics",
    "IntelligenceX",
  ],
  image: "/background.webp",
  github: "https://github.com/Anujrastogi24",
  sameAs: ["https://github.com/Anujrastogi24"],
  role:
    "Software engineer and data analyst focused on Python, Django, FastAPI, MERN, Power BI, API architecture, security auditing, and AI-enabled tools.",
} as const;

export const siteUrl = new URL(siteConfig.url);

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
