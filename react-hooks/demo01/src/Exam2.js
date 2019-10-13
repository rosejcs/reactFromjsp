import React, { useState } from 'react'

export default function Exam() {
  const [ age, setAge ] = useState(18)
  const [ sex, setSex ] = useState('男')
  const [ work, setWork ] = useState('web')
  return (
    <div>
      <p>Jcs:{age}</p>
      <p>Jcs:{sex}</p>
      <p>Jcs:{work}</p>
    </div>
  )
}
