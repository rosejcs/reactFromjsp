import React from 'react'
import { Link,Route } from 'react-router-dom'
import Salary from './workplace/Salary'
import Wakeup from './workplace/Wakeup'


function Workplace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/salary/">程序员加薪教程</Link></li>
          <li><Link to="/workplace/wakeup">程序员早期攻略</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <h3>职场技能</h3>
        <Route path="/workplace/salary/" component={ Salary }/>
        <Route path="/workplace/wakeup/" component={ Wakeup }/>
      </div>


    </div>
  )
}

export default Workplace