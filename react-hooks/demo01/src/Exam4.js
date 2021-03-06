import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter() {
  // 子组件中用useContext接收父组件传的count
  let count = useContext(CountContext)
  return (
    <h2>{ count }</h2>
  )
}

function Exam() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>You clicked { count } times</p>
      <button
        onClick={()=>{setCount(count+1)}}
      >click</button>
      {/* 用上下文包裹子组件,并设定传的value= */}
      <CountContext.Provider value={ count }>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default Exam