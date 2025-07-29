import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    browserDebugInfoInTerminal: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
};

export default nextConfig;

// images: {
//   remotePatterns: [new URL("https://api.themoviedb.org/3/t/p/w500/**")],
// },
