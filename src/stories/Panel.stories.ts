import Panel from '@/components/Panel';
import type { Meta, StoryObj } from '@storybook/react';
import Demo from '../../public/demo.svg'
import IconTech from '../../public/iconTech1.svg'

const meta: Meta<typeof Panel> = {
  title: 'Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    urlPanelDesing: { control: 'text' },
    srcIcon: { control: 'text' },
    widthTitle: { control: 'text' },
    widthText: { control: 'text' },
    opacityText: { control: 'text' },
    titleText: { control: 'text' },
    mainText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Primary: Story = {
  args: {
    urlPanelDesing: Demo.src,
    srcIcon: IconTech,
    widthTitle: '200px',
    widthText: '270px',
    opacityText: '0.8',
    titleText: 'Understanding needs',
    mainText: 'We identify who has the problem or need and provide a detailed description of what the problem entails',
  },
};
