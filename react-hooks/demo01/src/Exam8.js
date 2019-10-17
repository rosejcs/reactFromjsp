import React, { useState, useRef } from 'react'

function Exam () {
  const inputEl = useRef(null)
  const onButtonClick = ()=>{
    console.log(inputEl.current.value)
    inputEl.current.value = 'hello, useRef'
  }

  return (
    <>
      <input ref={inputEl}/>
      <button onClick={onButtonClick}>click</button>
    </>
  )
}

export default Exam