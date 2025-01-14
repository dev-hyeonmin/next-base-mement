import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../temp';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;
export default meta;

/**
 * Story
 */
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    warning: true,
    label: 'Button',
  },
};
