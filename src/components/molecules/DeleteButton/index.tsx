import React, { FC, HTMLProps } from "react";
import styles from './styles.module.scss'
import { TrashCanIcon } from 'components/atoms/Icon'
import Balloon from 'components/atoms/Balloon'
import classNames from "classnames";
import HoverTipInteraction, { Tip } from "components/atoms/HoverTipInteraction";

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
    <HoverTipInteraction className={ classNames([styles.root, className]) } { ...rest }>
      <TrashCanIcon onClick={ onClick } />
      <Tip><Balloon>削除する</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton