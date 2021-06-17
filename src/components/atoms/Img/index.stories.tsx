import React from 'react';
import { Story, Meta } from '@storybook/react';

import Img, { Props } from './index';

export default {
  title: 'Example/Img',
  component: Img,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Img {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  src: '/img/img01.jpg',
  width: '50%',
  height: '50%',
};

export const Secondary = Template.bind({});

Secondary.args = {
  src: '/img/img02.jpg',
  width: '50%',
  height: '50%',
};