import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use dynamic rendering for blog pages that fetch from DB
  // Static pages still get statically generated
  async redirects() {
    return [
      // Redirect old blog URLs for SEO continuity
      {
        source: "/blog",
        destination: "/de/blog",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/de/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
