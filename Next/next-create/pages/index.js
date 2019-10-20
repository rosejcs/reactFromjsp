import React from "react";

/* import Jspang from "../components/jspang";

function Home() {
  return <Jspang>这里是要给Jcs组件传递的参数children,呵呵</Jspang>;
} */

// Link的使用
import Link from "next/link";

import Router from "next/router";
const Home = () => {
  function gotoA() {
    Router.push("/jcsA");
  }

// Lazy Loading 


  function gotoXjj() {
    // Router.push('/xiaojiejie?name=囧空')
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name: "囧空"
      }
    });
  }

  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on(
    "routeChangeStart",
    (...args) => {
      console.log("1.routeChangeStart-->路由开始变化,参数为: ", ...args);
    }
  );
  Router.events.on(
    "routeChangeComplete",
    (...args) => {
      console.log("2.routeChangeComplete-->路由变化结束,参数: ", ...args);
    }
  );
  Router.events.on(
    "beforeHistoryChange",
    (...args) => {
      console.log("3.beforeHistoryChange-->History变化前,参数为: ", ...args);
    }
  );
  // 404的错误不算
  Router.events.on(
    "routeChangeError",
    (...args) => {
      console.log("4.routeChangeError-->路由发生错误,参数: ", ...args);
    }
  );
  Router.events.on(
    "hashChangeStart",
    (...args) => {
      console.log("5.hashChangeStart-->路由hash开始,参数: ", ...args);
    }
  );
  Router.events.on(
    "hashChangeComplete",
    (...args) => {
      console.log("6.hashChangeComplete-->路由hash完成,参数: ", ...args);
    }
  );
  
  return (
    <>
      <h1>Index page</h1>
      <div>
        <Link href="/jcsA">
          <a> go A </a>
        </Link>
      </div>
      <div>
        <Link href="/jcsB">
          <a> go B </a>
        </Link>
      </div>
      {/* <button onClick={()=>{Router.push('/jcsA')}}>go A(use Router)</button> */}
      <button onClick={gotoA}>go A(use Router)</button>

      {/* query 传参 */}
      <div>
        <Link href="/xiaojiejie?name=波多">
          <a>波多</a>
        </Link>
      </div>
      <div>
        <Link href="/xiaojiejie?name=囧空">
          <a>囧空</a>
        </Link>
      </div>
      {/* 跳转传参 */}
      <div>
        <button onClick={gotoXjj}>选 囧空</button>
      </div>

      <Link href={{ pathname: "/xiaojiejie", query: { name: "结衣" } }}>
        <a>选 结衣</a>
      </Link>
      <div>
        <Link href="#jcsA"><a>Hash A</a></Link>
      </div>
      
    </>
  );
};

export default Home;
