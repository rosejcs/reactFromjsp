import React from 'react'
import ShowArea from '../../src-hooks/Example6/ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'


function Exam() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default Exam