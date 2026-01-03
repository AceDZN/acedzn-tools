/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/db", "@repo/auth", "@repo/ui", "@repo/analytics"],
};

export default nextConfig;
