const Koa = require('koa')

const app = new Koa()
// 接收POST请求, POST请求的参数, 和如何实现查询字符串转为对象的方法

app.use(async (ctx)=>{
  if(ctx.url === "/" && ctx.method=== "GET") {
    // 显示表单页面
    let html = `
      <h1>JSpang Koa2 request POST</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>age</p>
        <input name="age" /><br/>
        <button>submit</button>
      </form>
    `;
    ctx.body = html
  } else if(ctx.url === '/' && ctx.method === "POST") {
    let postdata = await parsePostData(ctx)
    ctx.body = postdata
  } else {
    ctx.body = "<h1>404!<h1>"
  }
})

function parsePostData(ctx) {
  return new Promise(resolve=>{
    try {
      let postdata = ''
      ctx.req.addListener('data', (data)=>{
        postdata += data;
      })
      ctx.req.on('end',function() {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    }catch(err) {
      reject(err)
    }
  })
}

function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for(let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}


app.listen(3000,()=>{
  console.log(`[demo03] started at port 3000`)
})