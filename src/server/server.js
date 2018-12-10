const app = require("./app");
const WsHandler =  require('./sockets/socket_handler');

const server = require('http').Server(app);
WsHandler.start(server);

server.listen(8080, () => {
    console.log('Server running...');
});
