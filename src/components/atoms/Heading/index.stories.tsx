import React from 'react';
import { Story, Meta } from '@storybook/react';

import Heading, { HeadingWithUnderlined, Props } from './index';

export default {
  title: 'Example/Heading',
  component: Heading,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Heading {...args}>Example Text.</Heading>;
const TemplateWithUnderlined: Story<Props> = (args) => <HeadingWithUnderlined {...args}>Example Text.</HeadingWithUnderlined>;

export const Default = Template.bind({});

Default.args = {};

export const Level1 = Template.bind({});

Level1.args = {
  level: 1
};

export const Level1WithVisualLevel2 = Template.bind({});

Level1WithVisualLevel2.args = {
  level: 1,
  visualLevel: 2
};

export const WithUnderlined = TemplateWithUnderlined.bind({})

WithUnderlined.args = {}