import React, { FC } from "react";
import styles from './styles.module.scss'
import Notification from "components/organisms/Notification";
import { Program } from "types";

export type Props = {
  programs: Program[]
  onClickDelete: (program: Program) => void
}

const NotificationList: FC<Props> = (props: Props) => {
  const {
    programs,
    onClickDelete
  } = props

  return (
    <div>
      {
        programs.map(program => (
          <Notification
            key={program.id}
            className={ styles.item }
            program={program}
            onClickDelete={() => onClickDelete(program)}
          />
        ))
      }
    </div>
  )
}

export default NotificationList