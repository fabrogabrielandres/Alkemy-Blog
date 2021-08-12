import React from 'react'
import ContentLoader from 'react-content-loader'

export const TextSkeleton = ({ speed, width, height, viewBox, backgroundColor, foregroundColor }) => {
  
  const TextDefault = {
    speed: 2,
    width: 778,
    height: 115,
    viewBox:"0 0 400 160",
    backgroundColor:"transparent",
    foregroundColor: "#ecebeb"
  }



  return (
    <ContentLoader
      speed={speed ? speed : TextDefault.speed}
      width={width ? width : TextDefault.width}
      height={height ? height : TextDefault.height}
      viewBox={viewBox ? viewBox : TextDefault.viewBox}
      backgroundColor={backgroundColor ? backgroundColor : TextDefault.backgroundColor}
      foregroundColor={foregroundColor ? foregroundColor : TextDefault.foregroundColor}
    >
      <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
      <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
      <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
      <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
      <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
    </ContentLoader>
  )
}