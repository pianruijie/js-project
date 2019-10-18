
const koa = require('koa2')
const bodyParser = require('koa-bodyparser')()
const app = new koa()
app.use(bodyParser)
app.use(async(ctx,next)=>{
  if (ctx.request.path === '/a'){
    let data = {
      a:111
    }
    ctx.body = `sss(${JSON.stringify(data)})`
  }
})
app.listen(3000)