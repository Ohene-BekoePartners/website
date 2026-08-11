import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/lawyers", destination: "/teams/attorneys", permanent: true },
      { source: "/lawyers/:path*", destination: "/teams/:path*", permanent: true },
      // Profile was published under a placeholder slug before the correct name was applied.
      {
        source: "/teams/abena-akoto",
        destination: "/teams/emmanuel-opoku-somuah",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
