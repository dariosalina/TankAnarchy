import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');



function receivePlayerData () {
  socket.emit('move-completed', data =>
  console.log(data, "from server"))
  
  
  console.log(socket.id)
 
}


receivePlayerData()





