// 学习Lazy Loading

// ex: 加载一个事件插件 Moment.js

import React, { useState } from 'react'

// 在调用功能的时候再引入模块,懒加载,则这里不许要直接引入
// import moment from 'moment'

// 懒加载组件需要引入dynamic
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))
function Time() {
  
  const [nowTime,setTime] = useState(Date.now())
  // const changeTime = ()=>{
  //   setTime(moment(Date.now()).format())
  // }
  
  // 懒加载
  const changeTime = async ()=>{
    const moment = await import('moment')
    setTime(moment.default(Date.now()).format())
  }
  const lazyLoad = () => {
    return 
  }
  return (
    <>
      <div>显示时间为: {nowTime}</div>
      <div><button onClick={changeTime}>改变时间格式</button></div>
      {/* 懒加载组件需要引入dynamic */}
      {/* 当页面渲染到One标签时,才会执行上面的dynamic(import("../components/one")) */}
      <One />
    </>
  )
 

}

export default Time