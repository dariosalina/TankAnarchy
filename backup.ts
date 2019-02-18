import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import Controller from './controller'
import * as Koa from 'koa'
import * as IO from 'socket.io'
import {Server} from 'http'

const app = new Koa()
const server = new Server(app.callback())
export const io = IO(server)
const port = process.env.PORT || 4000

createKoaServer({
    cors: true,
    controllers: [Controller]
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))

io.on('connection', function(socket) {

  console.log(`User  just connected`)

  socket.on('disconnect', () => {
    console.log(`User  just disconnected`)}
)});
