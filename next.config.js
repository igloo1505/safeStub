// const { withSuperjson } = require('next-superjson')


/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
