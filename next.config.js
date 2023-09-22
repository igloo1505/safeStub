// const { withSuperjson } = require('next-superjson')

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    // workboxOptions: {
    //     maximumFileSizeToCacheInBytes: 7000000
    // }
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    poweredByHeader: false,
    experimental: {
        serverActions: true,
        typedRoutes: true
    },
})

module.exports = nextConfig
