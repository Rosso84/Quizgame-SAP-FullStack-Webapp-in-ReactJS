const Db = require('../db/users');
const socketIo = require('socket.io');

let io;

const start = (server) => {

    io = socketIo(server);

    io.on('connection', function (socket) {
        console.log("A user connected..");

        socket.on("userId", (dto) => {
            console.log('received username: ' + dto);
            Db.createUser(dto);
        });


        //TODO: finish sending users to lobby list
        //sends userNames stored in database to Lobby
       // socket.broadcast.emit('users', Db.getAllUsers());


        socket.on('disconnect', () => {
            console.log("User is disconnected.");
            Db.resetAllUsers();
        });
    });
};


module.exports = {start};