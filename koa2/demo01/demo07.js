const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router({
  // 给url接口加前缀
  prefix:'/jspang'
})

router
  .get('/',(ctx,next)=>{
    ctx.body = 'hello koa'
  })
  .get('/todo',(ctx, next)=>{
    ctx.body = 'todo'
  })

app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000,()=>{
  console.log('[demo07] start at 3000')
})