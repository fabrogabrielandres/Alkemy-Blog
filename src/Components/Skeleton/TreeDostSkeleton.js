import React from 'react'
import ContentLoader from 'react-content-loader'

export const TreeDostSkeleton = ({ speed, width, height, viewBox, backgroundColor, foregroundColor }) => {
  const TreedostDefault = {
    speed: 2,
    height:160,
    width:400,
    viewBox:"0 0 400 160",
    backgroundColor:"transparent",
    foregroundColor: "#ecebeb"
  }



  return (
    <ContentLoader
      speed={speed ? speed : TreedostDefault.speed}
      width={width ? width : TreedostDefault.width}
      height={height ? height : TreedostDefault.height}
      viewBox={viewBox ? viewBox : TreedostDefault.viewBox}
      backgroundColor={backgroundColor ? backgroundColor : TreedostDefault.backgroundColor}
      foregroundColor={foregroundColor ? foregroundColor : TreedostDefault.foregroundColor}
    >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)
}