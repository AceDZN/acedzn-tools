/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui", "@repo/auth", "@repo/db", "@repo/i18n", "@repo/analytics"],
};

export default nextConfig;
