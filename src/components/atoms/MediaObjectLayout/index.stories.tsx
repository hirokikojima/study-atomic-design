import React from 'react';
import { Story, Meta } from '@storybook/react';

import MediaObjectLayout, { Props } from './index';


export default {
  title: 'Example/MediaObjectLayout',
  component: MediaObjectLayout,
} as Meta;

export const Default: Story<Props> = () => (
  <MediaObjectLayout>
    <div>
      <img src="/img/img01.jpg" width="192" height="108" alt="MediaObjectLayout" />
    </div>
    <p>This is sample text for MediaObjectLayout.</p>
    <p>This is sample text for MediaObjectLayout.</p>
    <a href="#">link</a>
  </MediaObjectLayout>
)