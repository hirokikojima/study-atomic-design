import React, { FC, ReactElement, ReactNode } from "react"

const useMapParts = (partTypes: FC[], children: ReactNode) => {
  const parts: ReactElement[] = []

  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const index = partTypes.indexOf(child.type as any)
    if (index !== -1) parts.push(child.props.children)
  })

  return parts
}

export default useMapParts