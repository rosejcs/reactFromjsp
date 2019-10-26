const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', (ctx,next)=>{
    ctx.body="hello koa"
  })
  .get('/todo',(ctx,next) => {
    ctx.body = "todo page"
  })

// allowedMethods():  定义url'/'的请求是get, 如果使用了post, 则放回错误
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000,()=>{
  console.log(`[demo06] run port 3000`)
})