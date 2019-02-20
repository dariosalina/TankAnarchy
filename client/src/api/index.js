import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');


export default function newPlayer() {
        socket.emit('new-player', {
            player: {
                id: String(socket.id),
                position: [0,0],
                direction: ''
            },

        })
    }

