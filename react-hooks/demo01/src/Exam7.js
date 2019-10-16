import React, { useState, useMemo } from 'react'
// useMemo就是用于解决不必要的执行, 相当于以前的shouldComponentWillUpdate
function Exam() {
  const [ xh, setXh ] = useState('小红在待客状态')
  const [ zl, setZl ] = useState('志玲在待客状态')

  return (
    <div>
      <button onClick={()=>{ setXh(new Date().getTime()) }}>xh</button>
      <button onClick={()=>{setZl(new Date().getTime()+',志玲向我们走来')}}>zl</button>
      <ChildComponent name={xh}>{zl}</ChildComponent>
    </div>
  )
}

function ChildComponent({name,children}) {
  function changeXh() {
    console.log('她来了,小红向我们走来了');
    return name+',小红向我们走来了'
  }

  // const actionXh = changeXh(name)
  // 只有小红发生变化的时候,才执行changeXh
  const actionXh = useMemo(()=>changeXh(name),[name])
  
  return(
    <>
      <div>{actionXh}</div>
      {/* {children}就是Exam中的ChildComponent中的{zl} */}
      <div>{children}</div>
    </>
  )
}

export default Exam
