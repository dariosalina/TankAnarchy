import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

socket.on('update-players', data => {
    console.log(data)
}
)



export default function newPlayer() {
        socket.emit('new-player', {
            player: {
                id: String(socket.id),
                position: [0,0],
                direction: ''
            },

        })
    }

