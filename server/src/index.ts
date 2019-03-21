
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


let players = {}


// Server is working, controller /test is working.
io.on("connection", function(socket) {

  function sendFlag(){
    const setPosition = {position: [Math.floor(Math.random()*9)*40 + 40, Math.floor(Math.random()*9)*40 + 40]}
    io.emit('position-flag', setPosition)
  }

  socket.on('start-game', data => {
    console.log(`User with ID`,socket.id, `is connected`)
    console.log(Object.keys(players).length)
    
    players[socket.id] = data.id
    const newData = {
      ID:  socket.id,
      payload: {position: [Math.floor(Math.random()*9)*40 + 40, Math.floor(Math.random()*9)*40 + 40]}
    }
   
    io.emit('player-added', newData, )

    if (Object.keys(players).length === 2){

      sendFlag()
    }})

  socket.on("movement", data => {
    const newData = {
      ID: socket.id,
      payload: data.playerMovement
    }
    io.emit("move-completed", newData)

  socket.on("new-flag-request", data => {
    console.log(data)
    sendFlag()
  })

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
    delete players[socket.id]
    console.log(`User  just disconnected`);
  });



})


server.listen(port, () => console.log(`Listening on port ${port}`))