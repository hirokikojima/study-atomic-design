import classNames from "classnames";
import React, { FC, HTMLProps } from "react";
import styles from 'assets/scss/style.module.scss'

export type Props = {
  onClick?: () => void
} & HTMLProps<HTMLImageElement>

export type PropsWithIconName = {
  iconName: string
} & Props

type CrossOriginType = "" | "anonymous" | "use-credentials" | undefined

const Icon: FC<PropsWithIconName> = (props: PropsWithIconName) => {
  const {
    iconName,
    height = 20,
    width = 20,
    className,
    crossOrigin,
    onClick,
    ...rest
  } = props

  const newClassName = onClick ? classNames([styles.clickable, className]) : className
  const newCrossOrigin = crossOrigin as CrossOriginType

  const newProps = {
    height,
    width,
    className: newClassName,
    crossOrigin: newCrossOrigin,
    ...rest
  }

  return (
    <img
      src={`/img/icons/${ iconName }.svg`}
      onClick={ onClick }
      { ...newProps }
    />
  )
}

export default Icon

const iconFactory = (iconName: string) => (props: Props) => {
  return (
    <Icon { ...props } iconName={ iconName } />
  )
}



export const TrashCanIcon = iconFactory('trash-can')
export const ChevronRightIcon = iconFactory('chevron-right')
export const SearchIcon = iconFactory('search')
export const SettingsIcon = iconFactory('settings')