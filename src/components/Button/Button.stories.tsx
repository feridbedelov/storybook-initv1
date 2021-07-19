import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  size: 'small',
  label: 'Small Secondary Button',
  variant: 'secondary',
};

export const SmallSecondaryWithCustomClass = Template.bind({});
SmallSecondaryWithCustomClass.args = {
  size: 'small',
  label: 'Small Secondary with Custom class name',
  variant: 'secondary',
  className: 'custom',
};
