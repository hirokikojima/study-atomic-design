import classNames from "classnames";
import React, { FC, HTMLProps } from "react";
import styles from './styles.module.scss'
import { Program } from "types";
import Img from "components/atoms/Img";
import Heading from "components/atoms/Heading";
import { InfoTxt } from "components/atoms/Txt";
import DeleteButton from "components/molecules/DeleteButton";

export type Props = {
  program: Program
  onClickDelete: () => void
} & HTMLProps<HTMLDivElement>

const Notification: FC<Props> = (props: Props) => {
  const {
    program,
    className,
    onClickDelete
  } = props

  return (
    <div className={classNames([styles.root, className])}>
      <div>
        <Img src={program.thumbnail} className={styles.media} width="128" height="72" />
      </div>
      <div className={styles.body}>
        <Heading level={3} visualLevel={6}>{program.title}</Heading>
        <InfoTxt textSize="s">{program.channelName}</InfoTxt>
        <InfoTxt textSize="s" className={styles.time}>{program.startAt}〜{program.endAt}</InfoTxt>
        <DeleteButton onClick={onClickDelete} className={styles.del} />
      </div>
    </div>
  )
}

export default Notification