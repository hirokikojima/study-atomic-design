import React from 'react';
import { Story, Meta } from '@storybook/react';

import StickyLayout, { HeaderBlock, MainBlock, Props } from './index';
import Heading from 'components/atoms/Heading';
import Txt from 'components/atoms/Txt';


export default {
  title: 'Example/StickyLayout',
  component: StickyLayout,
} as Meta;

export const Default: Story<Props> = () => (
  <StickyLayout>
    <HeaderBlock>
      <Heading level={2} visualLevel={2}>Header</Heading>
    </HeaderBlock>
    <MainBlock>
      <Txt>MainContent</Txt>
    </MainBlock>
  </StickyLayout>
)