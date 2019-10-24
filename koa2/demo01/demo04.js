const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())


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
        <p>email</p>
        <input name="email" /><br/>
        <button>submit</button>
      </form>
    `;
    ctx.body = html
  } else if(ctx.url === '/' && ctx.method === "POST") {
    // 获取post的参数并应用bodyParser转为对象
    let postdata = ctx.request.body;
    ctx.body = postdata
  } else {
    ctx.body = "<h1>404!<h1>"
  }
})

app.listen(3000,()=>{
  console.log(`[demo03] started at port 3000`)
})