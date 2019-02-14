const Db = require('../db/users');
const socketIo = require('socket.io');

let io;

const start = (server) => {

    io = socketIo(server);

    io.on('connection', function (socket) {
        socket.on("userId", (dto) => {
            console.log('In socket_handler: received username: ' + dto);
            Db.createUser(dto);
            console.log("A user connected..");
        });


        //TODO: finish sending users to lobby list
        //sends userNames stored in database to Lobby
       // socket.broadcast.emit('users', Db.getAllUsers());


        socket.on('disconnect', () => {
            console.log("User is disconnected.");
            Db.resetDb();
        });
    });
};


module.exports = {start};