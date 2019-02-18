import 'reflect-metadata'
import {useKoaServer} from "routing-controllers"
import Controller from "./controller"
import * as Koa from 'koa'
import * as IO from 'socket.io'
import {Server} from 'http'

const app = new Koa()
const server = new Server(app.callback())
export const io = IO(server)
const port = process.env.PORT || 5000

useKoaServer(app, {
    cors: true,
   controllers: [Controller]
})

// Server is working, controller /test is working. socket still not working
io.on('connection', function(socket) {

  console.log(`User  just connected`)
  io.emit('chat', "ciao");
  io.emit('position', "position");

  socket.on('move', data=>{
      
      console.log(data, "server")
  
      let test:any = data.mov+2

      io.emit('move-completed', test);
  
    })
  

  socket.on('disconnect', () => {
    console.log(`User  just disconnected`)}
)});

server.listen(port, ()=> console.log(`Listening on port ${port}`))
