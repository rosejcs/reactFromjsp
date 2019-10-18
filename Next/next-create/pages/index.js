import React from "react";

/* import Jspang from "../components/jspang";

function Home() {
  return <Jspang>这里是要给Jcs组件传递的参数children,呵呵</Jspang>;
} */

// Link的使用
import Link from 'next/link'

function Home() {
  return(
    <>
      <h1>Index page</h1>
      <div><Link href="/nav/jcsa">go A</Link></div>
      <div><Link href="/nav/jcsb">go B</Link></div>
    </>
  )
}

export default Home;
