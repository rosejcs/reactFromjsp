import React from "react";

/* import Jspang from "../components/jspang";

function Home() {
  return <Jspang>这里是要给Jcs组件传递的参数children,呵呵</Jspang>;
} */

// Link的使用
import Link from "next/link";

import Router from "next/router";
function Home() {
  function gotoA() {
    Router.push("/jcsA");
  }
  return (
    <>
      <h1>Index page</h1>
      <div>
        <Link href="/jcsA">go A</Link>
      </div>
      <div>
        <Link href="/jcsB">go B</Link>
      </div>
      {/* <button onClick={()=>{Router.push('/jcsA')}}>go A(use Router)</button> */}
      <button onClick={gotoA}>go A(use Router)</button>

      {/* query 传参 */}
      <div>
        <Link href="/xiaojiejie?name=波多">波多</Link>
      </div>
      <div>
        <Link href="/xiaojiejie?name=囧空">囧空</Link>
      </div>
      {/* 跳转传参 */}
      <div>
        <button onClick={gotoXjj}>选 囧空</button>
      </div>

      <Link href={{ pathname: '/xiaojiejie',query:{name:'结衣'} }}>选 结衣</Link>
    </>
  );
  function gotoXjj() {
    // Router.push('/xiaojiejie?name=囧空')
    Router.push({
      pathname:'/xiaojiejie',
      query:{
        name:'囧空'
      }
    })
  }
  
}

export default Home;
