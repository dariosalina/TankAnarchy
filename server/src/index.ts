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


// Server is working, controller /test is working.
io.on("connection", function(socket) {
  console.log(`User ${socket.id} just connected`);

  
  socket.on("movement", data => {
    console.log(socket.id)
    const playerMovement = {
      id: socket.id,
      position: data.position
    }
    // console.log(socket.id)
    // player = data
    // console.log(data)
    io.emit('move-completed', playerMovement);
  });


  socket.on("disconnect", () => {
    console.log(`User  just disconnected`);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
