import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DeleteButton, { Props } from '.';

export default {
  title: 'Example/DeleteButton',
  component: DeleteButton,
} as Meta;

export const Default: Story<Props> = () => (
  <DeleteButton onClick={ action('削除ボタンがクリックされました') } />
)