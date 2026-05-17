const { withContentCollections } = require("@content-collections/next");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

module.exports = withNextIntl(withContentCollections(nextConfig));
