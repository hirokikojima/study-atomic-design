import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NotificationListTemplate, { Props } from '.';
import { Program } from 'types';

export default {
  title: 'Example/NotificationListTemplate',
  component: NotificationListTemplate,
} as Meta;

const programs: Program[] = [
  {
    id: 1,
    thumbnail: '/img/img01.jpg',
    title: 'サンプルプログラム１',
    channelName: 'サンプルチャンネル１',
    startAt: '2021-06-24 10:00',
    endAt: '2021-06-24 12:00',
  },
  {
    id: 2,
    thumbnail: '/img/img02.jpg',
    title: 'サンプルプログラム２',
    channelName: 'サンプルチャンネル２',
    startAt: '2021-06-25 10:00',
    endAt: '2021-06-25 12:00',
  }
]

export const Default: Story<Props> = () => (
  <NotificationListTemplate
    notifications={programs}
    onClickDeleteNotification={ action(`削除ボタンがクリックされました`) }
  />
)