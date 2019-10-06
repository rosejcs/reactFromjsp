import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import Workplace from './Pages/Workplace'
import Video from './Pages/Video'
import './index.css'

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let routeConfig = [
      {path:'/',title:'博客首页',exact:true,component:Index},
      {path:'/video',title:'视频教程',exact:false,component:Video},
      {path:'/workplace',title:'职场技能',exact:false,component:Workplace}
    ]
    return (
      <Router>
        <div className="mainDiv">
          <div className="leftNav">
            <h3>一级导航</h3>
            <ul>
              {
                routeConfig.map((item,index)=>{
                  return (
                    <li key={index+item}><Link to={item.path}>{item.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="rightMain">
            {
              routeConfig.map((item, index)=>{
                return (
                  <Route path={item.path} exact={item.exact} component={item.component} key={index+item} />
                )
              })
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
