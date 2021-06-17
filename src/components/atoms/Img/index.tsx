import React, { FC, HTMLProps } from "react";

export type Props = HTMLProps<HTMLImageElement>

type crossOriginType = "" | "anonymous" | "use-credentials" | undefined

const Img: FC<Props> = (props: Props) => {
  const rest = {
    ...props,
    crossOrigin: props.crossOrigin as crossOriginType
    
  }

  return <img {...rest} />
}

export default Img