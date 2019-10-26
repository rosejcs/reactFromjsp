const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

app.use(async ctx => {
  if (ctx.url === "/index") {
    ctx.cookies.set("MyName", "jspang", {
      domain: "127.0.0.1",
      path: "/index",
      maxAge: 1000 * 60 * 60 * 24,
      expires: new Date("2019-10-29"),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = "Cookie is ok";
  } else {
    if (ctx.cookies.get("MyName")) {
      ctx.body = ctx.cookies.get("MyName");
    } else {
      ctx.body = "cookies is null";
    }
  }
});

app.listen(3000, () => {
  console.log("[demo10] start ");
});
