import React from 'react';
import { Story, Meta } from '@storybook/react';

import Txt, { Props, InfoTxt, WarningTxt } from './index';

export default {
  title: 'Example/Txt',
  component: Txt,
} as Meta;

export const Default: Story<Props> = () => <Txt>This is default text.</Txt>
export const Info: Story<Props> = () => <InfoTxt>This is info text.</InfoTxt>
export const Warning: Story<Props> = () => <WarningTxt>This is warning text.</WarningTxt>
