const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withNextIntl(withContentlayer(nextConfig)) 
