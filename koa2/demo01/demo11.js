const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
// 引用模板引擎渲染页面, ' .ejs ' 文件
app.use(views(path.join(__dirname, './view'),{
  extension:'ejs'
}))


app.use(async (ctx)=>{
  let title = 'Hello Koa'
  await ctx.render('index',{title})
})
app.listen(3000,()=>{
  console.log(`[demo11] start...........`);
})