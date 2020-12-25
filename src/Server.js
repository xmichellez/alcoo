const { Server } = require('boardgame.io/server');
const Alcoo  = require('./Game');

const server = Server({ games: [Alcoo] });

server.run(8000);
