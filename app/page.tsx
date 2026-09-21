import { siteConfig } from "./seo";

export default function Home() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-[#0a0e1a]">
      <section aria-label="Portfolio summary" className="sr-only">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.description}</p>
        <p>{siteConfig.role}</p>
        <a href={siteConfig.github}>GitHub profile for Anuj Rastogi</a>
      </section>
      <iframe
        src="/portfolio.html"
        title="Anuj Rastogi Portfolio"
        className="h-full w-full border-0"
      />
    </main>
  );
}
