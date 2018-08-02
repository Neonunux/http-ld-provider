import dotenv from 'dotenv'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

dotenv.config()

const port = process.env.SERVER_PORT
const app = new Koa()

app.use(bodyParser())

app.use(async ctx => {
  ctx.body = 'It works!'
})

app.listen(port)
console.log(`Server started on port ${port}.`)
