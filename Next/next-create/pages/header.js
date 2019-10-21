// import Head from 'next/head'

// function Header() {
//   return (
//     <>
//       <Head>
//         <title>技术胖jspang is fatst</title>
//         <meta charSet='utf-8' />
//       </Head>
//       <div>JSpang.com</div>
//     </>
//   ) 
  
// }

// 或者 引入定义好的组件,实现全局定义的组件作为局部的head 实现seo
import MyHeader from '../components/myHeader'

// next时 style jsx的实现, 要引入css 需要安装 @zeit/next-css
// Next.js css import  style jsx antd css
import '../public/test.css'

// 按需加载
// babel-plugin-import 
import { Button } from 'antd'

function Header() {
  return (
    <>
      <MyHeader />
      <Button type="primary">我是按钮</Button>
    </>
  )
}

export default Header