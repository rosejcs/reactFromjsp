import React,{ useState } from 'react'

function Exam () {

  const [ xh, setxh ] = useState('xh waitting')
  const [ zl, setzl ] = useState('zl waitting')
  return (
    <>
      <button onClick={()=>{setxh(new Date().getTime())}}>{xh}</button>
      <button onClick={()=>{setzl(new Date().getTime()+',zl come to us')}}>{zl}</button>
      <ChildComponent name={xh}>{zl}</ChildComponent>
    </>
  )
}

function ChildComponent(name,children) {

  function changexh() {
    console.log('xh,come to us')
    return name + ' come to us'
  }

  // const actionxh = changexh(name)
  const actionxh = useMemo(
    ()=> changexh(name),
    [name]
  )
  return (
    <>
      <p>{actionxh}</p>
      <p>{children}</p>
    </>
  )
}