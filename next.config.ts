import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "anujrastogi.in",
          },
        ],
        destination: "https://www.anujrastogi.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
