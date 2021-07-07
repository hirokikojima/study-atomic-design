import NotificationListTemplate from "components/templates/NotificationListTemplate";
import React, { FC, useState } from "react";
import { useEffect } from "react";
import { Program } from "types";

export type State = {
  notifications: Program[]
}

const NotificationListPage: FC = () => {
  const [state, setState] = useState<State>({
    notifications: []
  })

  useEffect(() => {
    setState({
      notifications: [
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
        },
        {
          id: 3,
          thumbnail: '/img/img01.jpg',
          title: 'サンプルプログラム３',
          channelName: 'サンプルチャンネル３',
          startAt: '2021-06-26 10:00',
          endAt: '2021-06-26 12:00',
        }
      ]
    })
  }, [])
  
  const onClickDeleteNotification = (program: Program) => {
    setState({
      ...state,
      notifications: state.notifications.filter(notification => notification.id !== program.id)
    })
  }
  
  return (
    <NotificationListTemplate
      notifications={state?.notifications}
      onClickDeleteNotification={onClickDeleteNotification}
    />
  )
}

export default NotificationListPage