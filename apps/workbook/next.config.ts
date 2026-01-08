import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/auth", "@repo/db", "@repo/i18n", "@repo/analytics"],
};

export default nextConfig;
