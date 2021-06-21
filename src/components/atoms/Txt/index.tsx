import classNames from "classnames";
import React, { FC, HTMLProps, PropsWithChildren } from "react";
import styles from 'assets/scss/style.module.scss'

export type TextSize = 's' | 'm' | 'l'
export type TextType = 'default' | 'info' | 'warning'

export type Props = PropsWithChildren<{
  textSize?: TextSize
}> & HTMLProps<HTMLParagraphElement>

export type PropsWithType = {
  textType?: TextType
} & Props

const Txt: FC<PropsWithType> = (props: PropsWithType) => {
  const {
    textType = 'default',
    textSize = 'm',
    className,
    children,
    ...rest
  } = props
  
  const newClassName = classNames([
    styles[textType],
    styles[textSize],
    className
  ])

  return (
    <p className={ newClassName } { ...rest }>{ children }</p>
  )
}

const txtFactory = (textType: TextType) => (props: Props) => {
  return (
    <Txt textType={ textType } { ...props } />
  )
}

export default txtFactory('default')
export const InfoTxt = txtFactory('info')
export const WarningTxt = txtFactory('warning')