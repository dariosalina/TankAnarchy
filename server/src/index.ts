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


const players = {

}





// Server is working, controller /test is working.
io.on("connection", function(socket) {

    // When a player connects
  socket.on('new-player', state => {
      console.log('New player joined with state:', state)
      players[socket.id] = state
      console.log(players)
      // Emit the update-players method in the client side
      io.emit('update-players', players)
    })

  // console.log(`User ${socket.id} just connected`);
    


  // io.emit('player-connected',players)
  
  socket.broadcast.on("movement", data => {
    const playerMovement = {
      // id: players.id,
      position: data.position
    }
    // console.log(socket.id)
    // player = data
    // console.log(data)
    socket.broadcast.emit('move-completed', playerMovement);

  });


  socket.on("disconnect", () => {
    console.log(`User  just disconnected`);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
