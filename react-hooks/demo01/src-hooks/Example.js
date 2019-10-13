import React, { useState, useEffect } from "react";
import Example2 from "./Example2";
import { Button } from "antd";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(()=>{
    console.log(`useEffect=>Index coming`);
    return ()=>{ // componentWillUnmount
      console.log('useEffect=>Index gone');
    }
  }, []) // 第二个参数,[],代表只有Index被销毁时才执行解绑函数componentWillUnmount
  return <h2>JSPANG.com</h2>;
}

function List() {
  // const [ ] = useState(0)
  useEffect(()=>{
    console.log(`useEffect=>List coming`);
    return ()=>{
      console.log('useEffect=>List gone');
    }
  }, [])
  return <h2>List Page</h2>;


}

function Example() {
  const [count, setCount] = useState(0); // 数组解构
  console.log(useState(0));

  useEffect(() => {
    // useEffect = componentDidMount + componentDidUpdate,异步
    console.log(`useEffect=>You clicked ${count} times`);
    return ()=>{
      console.log('==============');
    }

  }, [count]); //  当 count变化时 执行 解绑函数 componentWillUnmount

  return (
    <div>
      <p>U click {count} times</p>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ++++
      </Button>
      <Example2 />

      <Router>
          <div>
            <Link to="/">Index</Link>
          </div>
          <div>
            <Link to="/list/">List</Link>
          </div>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/list/" component={List} />
        </div>
      </Router>
    </div>
  );
}

export default Example;
