import StickyLayout, { HeaderBlock, MainBlock } from "components/atoms/StickyLayout";
import NotificationList from "components/organisms/NotificationList";
import React, { FC } from "react";
import { Program } from "types";

export type Props = {
  notifications: Program[]
  onClickDeleteNotification: (program: Program) => void
}

const NotificationListTemplate: FC<Props> = (props: Props) => {
  const {
    notifications,
    onClickDeleteNotification
  } = props

  return (
    <StickyLayout>
      <HeaderBlock>
        <div>This is Header.</div>
      </HeaderBlock>
      <MainBlock>
        <NotificationList
          programs={ notifications }
          onClickDelete={ onClickDeleteNotification }
        />
      </MainBlock>
    </StickyLayout>
  )
}

export default NotificationListTemplate