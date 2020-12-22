const { Server } = require('boardgame.io/server');
const Alcoo  = require('./Game');
console.log('My game object is', Alcoo);

const server = Server({ games: [Alcoo] });

server.run(8000);
