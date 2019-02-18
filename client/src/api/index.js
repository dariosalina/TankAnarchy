import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

function connect(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the 
  // callback function with said message
  socket.on('chat', (message) => {
    // console.log the message for posterity
    console.log(message)
    // trigger the callback passed in when
    // our App component calls connect
    cb(message);
  })
}

function Position(mov){
  socket.on('position', (position) => {
    
    // console.log the message for posterity
    console.log(position)
    // trigger the callback passed in when
    // our App component calls connect
    mov(position);
  })
}

function movement(){
  
  socket.on('movement', (data) => {
    // console.log the message for posterity
    console.log(data)
    // trigger the callback passed in when
    // our App component calls connect
    
  })
};

const test = {
  mov:2

}

function emitPlayerData () {

  socket.emit('move', test)
  console.log(test, "local client not receiving")
}

emitPlayerData()
socket.on('move-completed', test=>
console.log(test, "received"))

export { connect, Position, movement }