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
  // socket.on('new-player', state => {
  //   players[socket.id] = state
  // })

  socket.on("movement", data => {
    const newData = {
      ID: socket.id,
      payload: data.playerMovement
    }
    io.emit("move-completed", newData)

  });

  socket.on("disconnect", () => {
    console.log(`User  just disconnected`);
  });

})


server.listen(port, () => console.log(`Listening on port ${port}`))