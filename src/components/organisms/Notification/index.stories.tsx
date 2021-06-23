import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification, { Props } from '.';
import { Program } from 'types';

export default {
  title: 'Example/Notification',
  component: Notification,
} as Meta;

const program: Program = {
  id: 0,
  thumbnail: '/img/img01.jpg',
  title: 'サンプルプログラム',
  channelName: 'サンプルチャンネル',
  startAt: '2021-06-24 10:00',
  endAt: '2021-06-24 12:00',
}

export const Default: Story<Props> = () => (
  <Notification
    program={program}
    onClickDelete={ action('削除ボタンがクリックされました') }
  />
)