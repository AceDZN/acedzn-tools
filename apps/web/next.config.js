/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/db", "@repo/auth", "@repo/i18n"],
};

export default nextConfig;
