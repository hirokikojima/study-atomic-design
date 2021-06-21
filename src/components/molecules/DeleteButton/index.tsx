import React, { FC, HTMLProps } from "react";
import styles from './styles.module.scss'
import { TrashCanIcon } from 'components/atoms/Icon'
import Balloon from 'components/atoms/Balloon'
import classNames from "classnames";

export type Props = {
  onClick: () => void
} & HTMLProps<HTMLSpanElement>

const DeleteButton: FC<Props> = (props: Props) => {
  const {
    className,
    onClick,
    ...rest
  } = props
  
  return (
    <span className={ classNames([styles.root, className]) } { ...rest }>
      <TrashCanIcon onClick={ onClick } />
      <Balloon>削除する</Balloon>
    </span>
  )
}

export default DeleteButton