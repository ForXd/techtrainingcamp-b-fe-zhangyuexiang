const ws = require('ws');
const server = ws.Server;

const wsServer = new server({port: 3001});
let table = {};

function getTop(table) {
    let list = Object.keys(table).sort(function(a,b){return table[b]-table[a]}).slice(0, 10);
    return list.map(v =>({keyword: v}));
}


wsServer.broadcast=function broadcast() {      //服务端广播消息
    wsServer.clients.forEach(function each (client) {
        if(client.readyState==ws.OPEN){
            client.send(JSON.stringify(getTop(table)));
        }
    })
}
function wsInit() {
    wsServer.on('connection', function(ws) {
        console.log('new client connect');
        ws.on('message', function(message) {
            console.log(`receive: ${message}`);
            message = JSON.parse(message);
            let keyword = message.keyword;
            if (table[keyword]) {
                table[keyword] += 1;
            } else {
                table[keyword] = 1;
            }
            wsServer.broadcast();
        })
    })
}
module.exports = wsInit;