import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import styles from 'assets/scss/style.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLSpanElement>>

const Balloon: FC<Props> = (props: Props) => {
  const {
    children,
    ...rest    
  } = props
  
  return (
    <span className={ styles.balloon } { ...rest }>
      { children }
    </span>
  )
}

export default Balloon