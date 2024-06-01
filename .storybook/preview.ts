import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#ffffff' },
    ],
  },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


