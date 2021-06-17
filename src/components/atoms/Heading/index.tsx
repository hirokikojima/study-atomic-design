import React, { FC, HTMLProps, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from 'assets/scss/style.module.scss'
import { useHeading } from "./useHeading";

export type Props = PropsWithChildren<{
  level: number,
  visualLevel: number,
}> & HTMLProps<HTMLHeadingElement>

const Heading: FC<Props> = (props: Props) => {
  const {
    children,
    level,
    visualLevel,
    className,
    ...rest
  } = props

  const {
    tagType,
    visualLevel: newVisualLevel
  }= useHeading({
    level: level,
    visualLevel: visualLevel,
  })

  const newClassName = classNames([
    styles.h,
    styles[`h${visualLevel}`],
    className
  ])

  const newProps = {
    ...rest,
    className: newClassName
  }

  return React.createElement(
    tagType,
    newProps,
    children
  )
}

export default Heading

export const HeadingWithUnderlined: FC<Props> = (props: Props) => {
  const {
    children,
    level,
    visualLevel,
    className,
    ...rest
  } = props

  const {
    tagType,
    visualLevel: newVisualLevel
  }= useHeading({
    level: level,
    visualLevel: visualLevel,
  })

  const newClassName = classNames([
    styles.h,
    styles.underlined,
    styles[`h${visualLevel}`],
    className
  ])

  const newProps = {
    ...rest,
    className: newClassName
  }

  return React.createElement(
    tagType,
    newProps,
    children
  )
}