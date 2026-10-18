export const siteConfig = {
  name: "Anuj Rastogi",
  title: "Anuj Rastogi | Full Stack Developer & Data Analyst",
  shortTitle: "Anuj Rastogi",
  url: "https://www.anujrastogi.in",
  description:
    "Portfolio of Anuj Rastogi, a full stack developer and data analyst building web products, REST APIs, automated testing tools, and Power BI analytics.",
  locale: "en_US",
  keywords: [
    "Anuj Rastogi",
    "full stack developer",
    "software engineer",
    "data analyst",
    "portfolio",
    "Python developer",
    "Django developer",
    "Next.js developer",
    "MERN stack developer",
    "REST APIs",
    "Power BI",
    "IntelligenceX",
  ],
  image: "/background.webp",
  github: "https://github.com/Anujrastogi24",
  linkedin: "https://www.linkedin.com/in/anuj-rastogi-426252195/",
  sameAs: ["https://github.com/Anujrastogi24", "https://www.linkedin.com/in/anuj-rastogi-426252195/"],
  role:
    "Full stack developer and data analyst focused on Python, Django, Next.js, MERN, REST APIs, Power BI, and automated website testing.",
} as const;

export const siteUrl = new URL(siteConfig.url);

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
