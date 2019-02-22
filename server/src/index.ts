import "reflect-metadata";
import { useKoaServer } from "routing-controllers";
import Controller from "./controller";
import * as Koa from "koa";
import * as IO from "socket.io";
import { Server } from "http";

const app = new Koa();
const server = new Server(app.callback());
export const io = IO(server);
const port = process.env.PORT || 5000;

useKoaServer(app, {
  cors: true,
  controllers: [Controller]
});


// let players = {

// };


// Server is working, controller /test is working.
io.on("connection", function(socket) {
  console.log(`User with ID`,socket.id, `is connected`)
  
  socket.on('start-game', data => {
    console.log(data, 'data')
  data = {position: [Math.floor((Math.random() * 700) + 50), Math.floor((Math.random() * 500) + 50)]}
  console.log(data, 'random data')

  io.emit('position-flag', data)
})

  socket.on("movement", data => {
    const newData = {
      ID: socket.id,
      payload: data.playerMovement
    }
    io.emit("move-completed", newData)

  });
  socket.on("drop-mine", data => {
    const updatedMine = {
      ID: socket.id,
      payload: data
    }
    io.emit("mines-to-client", updatedMine )
  });

  socket.on("explosion", data => {
    const updateExplosion = {
      ID: socket.id,
      payload: data
    }
    io.emit("explosion-to-client", updateExplosion )
  })

  socket.on("disconnect", () => {
    console.log(`User  just disconnected`);
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`))

