import Image from "next/image";
import ParallaxBackground from "./parallax-background";

export default function Background() {
  return (
    <div className="absolute inset-0">
      <ParallaxBackground>
        <Image
          src="/background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover object-[58%_50%] md:object-[62%_50%] lg:object-[60%_50%]"
        />
      </ParallaxBackground>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#0a0e1a]/18"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,26,0.72)_0%,rgba(10,14,26,0.08)_38%,rgba(10,14,26,0.2)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(10,14,26,0.9)_0%,rgba(10,14,26,0.66)_28%,rgba(10,14,26,0.24)_52%,rgba(10,14,26,0.05)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(10,14,26,0.94)_0%,rgba(10,14,26,0.4)_26%,rgba(10,14,26,0)_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(125,211,252,0.1)_0_1px,transparent_1px),linear-gradient(180deg,rgba(125,211,252,0.08)_0_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_18%_78%,rgba(125,211,252,0.11)_0%,transparent_58%),radial-gradient(45%_40%_at_80%_24%,rgba(200,160,240,0.12)_0%,transparent_62%)]"
      />
    </div>
  );
}
