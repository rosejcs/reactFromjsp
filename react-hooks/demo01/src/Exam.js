import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("useEffect=>Index coming");
    return () => {
      console.log("useEffect=>Index gone");
    };
  }, []); // [] => Index被销毁时才执行解绑

  return <h2>JsPang.com</h2>;
}

function List() {
  useEffect(() => {
    console.log("useEffect=>List coming");
    return () => {
      console.log("useEffect=>List gone");
    };
  }, []);

  return <h2>List Page</h2>;
}

function Exam() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log("=====");
    };
  }, [count]); // count变化时 执行 解绑函数 componentWillUnmount
  return (
    <div>
      <p>U click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>

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

export default Exam;
