import type { Meta, StoryObj } from '@storybook/react';

import Panel from './Panel';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "titleText",
    mainText: "mainText"
  }
};