import ThemeProvider from '../src/ThemeProvider';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    expanded: true
  },
  backgrounds: {
    default: 'White',
    values: [
      { name: 'White', value: '#ffffff' },
      { name: 'Black', value: '#000000' },
      { name: 'Orange Light', value: '#ffebcb' },
      { name: 'Blue Light', value: '#e6f8fd' }
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];