
const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/__stories__/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states'
  ],
  
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,

          /**
           * Map Emotion 10 libraries to Emotion 11 libraries.
           *
           * Otherwise Storybook fails to compile with "Module not found: Error: Can't resolve '@emotion/styled/base'", etc.
           * It wasn't necessary to do this until we imported React component using "@emotion/styled".
           * This issue is probably caused because Storybook uses Emotion 10 while we have Emotion 11 used by the Next.js app.
           *
           * @see https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
           */
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        },
      },
    };
  }
};
