import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon, { Props, TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon } from './index';

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

export const TrashCan: Story<Props> = () => <TrashCanIcon />
export const TrashCanWithOnClick: Story<Props> = () => <TrashCanIcon onClick={ () => console.log('clicked.') } />
export const ChevronRight: Story<Props> = () => <ChevronRightIcon />
export const Search: Story<Props> = () => <SearchIcon />
export const Settings: Story<Props> = () => <SettingsIcon />