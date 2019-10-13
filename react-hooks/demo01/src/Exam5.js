import React, { useReducer } from 'react'
function ReducerDemo () {
  const [ count, dispatch ] = useReducer((state, action)=>{
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0) // 0 是 state 即 count 的 默认值

  return(
    
    <div>
      <h2>现在的分数: {count}</h2>
      <button onClick={()=>{dispatch('add')}}>Increment</button>
      <button onClick={()=>{dispatch('sub')}}>Decrement</button>
    </div>
  )
}

const Exam = ReducerDemo
export default Exam