import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./icons";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/anujrastogi",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anujrastogi",
    Icon: LinkedinIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@anujrastogi",
    Icon: YoutubeIcon,
  },
];

export default function Nav() {
  return (
    <header className="w-full animate-fade-in">
      <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between gap-4 px-6 py-4 sm:px-10 sm:py-5 lg:px-16">
        <a
          href="#"
          className="group flex flex-col leading-none"
          aria-label="Anuj Rastogi, home"
        >
          <span className="text-[17px] font-semibold tracking-tight text-white">
            anujrastogi<span className="text-accent">.in</span>
          </span>
          <span className="mt-1.5 hidden font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-white/50 transition-colors group-hover:text-white/70 sm:block">
            Code · Analyze · Build
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:text-accent"
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}