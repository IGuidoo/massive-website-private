import withMarkdoc from '@markdoc/next.js';
import { createLoader } from 'simple-functional-loader';
import withSearch from './src/markdoc/search.mjs';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  env: {
    OPEN_AI_API: process.env.OPEN_AI_API,
    DEEPL_API: process.env.DEEPL_API,
  },
  webpack(config, { isServer }) {
    config.module.rules.unshift({
      test: /\.md$/,
      use: [
        createLoader(function (source) {
          return (
            source + '\nexport const metadata = frontmatter.nextjs?.metadata;'
          );
        }),
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }],
    });

    // Conditionally add the BundleAnalyzerPlugin
    if (!isServer) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
  },
};

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
);
