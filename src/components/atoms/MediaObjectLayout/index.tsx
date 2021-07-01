import classNames from "classnames";
import React, { FC, HTMLProps } from "react";
import { PropsWithChildren } from "react";
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLDivElement>>

const MediaObjectLayout: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    ...rest
  } = props

  const first = Array.isArray(children) ? children[0] : null
  const body  = Array.isArray(children) ? children.slice(1) : children

  return (
    <div className={classNames([styles.container, className])} {...rest}>
      <div>{ first }</div>
      <div className={styles.body}>{ body }</div>
    </div>
  )
}

export default MediaObjectLayout