import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import Controller from './controller'
// import * as Koa from 'koa'
// import * as IO from 'socket.io'

const port = process.env.PORT || 4000

const app = createKoaServer({
    cors: true,
    controllers: [Controller]
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))

