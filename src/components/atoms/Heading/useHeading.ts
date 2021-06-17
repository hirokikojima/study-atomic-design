import React, { HTMLProps } from "react";

export type useHeadingReturns = {
  tagType: string,
  visualLevel: number
}

export type Props = {
  level: number,
  visualLevel: number,
}

export const useHeading = (props: Props): useHeadingReturns => {
  const {
    level,
    visualLevel,
  } = props
  
  const newLevel = Math.max(1, Math.min(6, level))
  const newVisualLevel = visualLevel || level

  const tagType = `h${level}`
  
  return {
    tagType,
    visualLevel: newVisualLevel
  }
}