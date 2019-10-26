const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(async (ctx)=>{
  if(ctx.url === '/index') {
    ctx.cookies.set(
      "MyName","jspang"
    )
    ctx.body = "Cookie is ok"
  }else {
    ctx.body = "hello world"
  }
})

app.listen(3000,()=>{
  console.log('[demo10] start ');
})