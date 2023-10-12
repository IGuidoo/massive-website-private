import withMarkdoc from '@markdoc/next.js';
import { createLoader } from 'simple-functional-loader';

import withSearch from './src/markdoc/search.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  // Configure environment variables at the top level of your next.config.js
  env: {
    OPEN_AI_API: process.env.OPEN_AI_API,
    DEEPL_API: process.env.DEEPL_API,
  },
  webpack(config) {
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

    // Add a new rule for SVG files using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }],
    });

    return config;
  },
};

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
);
