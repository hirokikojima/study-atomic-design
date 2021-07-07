import classNames from "classnames";
import useMapParts from "hooks/useMapParts";
import React, { FC, HTMLProps, PropsWithChildren } from "react";
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLDivElement>>

const StickyLayout: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    ...rest
  } = props
  
  const [ header, main ] = useMapParts([
    HeaderBlock,
    MainBlock
  ], children)

  return (
    <div className={classNames([styles.root, className])} {...rest}>
      { header }
      { main }
    </div>
  )
}

export default StickyLayout

export type ChildProps = PropsWithChildren<{}>

export const HeaderBlock = (props: ChildProps) => <span>This is hidden component.</span>
export const MainBlock = (props: ChildProps) => <span>This is hidden component.</span>