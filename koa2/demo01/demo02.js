const Koa = require('koa')

const app = new Koa()

app.use(async (ctx)=>{
  let url = ctx.url
  
  // 从request中接收GET请求
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取GET请求
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {
    url,
    req_query, // { name: "tom",age: 18 }
    req_querystring, // "name=tom&age=18"
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000,()=>{
  console.log('[demo02] started at port 3000')
})