const Koa = require('koa')

const app = new Koa()

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
    ctx.body = '接收到POST的数据'
  } else {
    ctx.body = "<h1>404!<h1>"
  }
  
})

app.listen(3000,()=>{
  console.log(`[demo03] started at port 3000`)
})