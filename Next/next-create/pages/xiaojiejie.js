import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";



const Xiaojiejie = ({ router,data }) => {
  return (
    <>
      <div>{router.query.name},来为我们服务了.</div>
      <div>{ data }</div>
      <Link href="/">
        <a> go Index </a>
      </Link>
    </>
  );
};

Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    let url = "https://easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj"
    axios({
      url,
      method:"GET",
    }).then(res => {
      console.log("远程数据结果: ", res);
      
      resolve(res.data);
    });
  });
  // resolve返回给到Xiaojiejie组件props参数列表中的是data这个数组  res>data>data:['吃饭',"睡觉","打豆豆"],由getInitialProps提供的
  return await promise;
};

export default withRouter(Xiaojiejie);
