/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    i18n: {
        locales: ["en", "el", "pseudo"],
        defaultLocale: "en",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
