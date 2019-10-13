import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea() {
  const { color } = useContext(ColorContext)
  
  return (
    <h2 style={{color}}>字体颜色为{ color }</h2>
  )
}