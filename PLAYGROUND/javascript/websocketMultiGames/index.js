const http = require('http')
const httpServer = http.createServer();
const websocketServer = require('websocket').server;
const g = require('./guid')
let games = []

console.log(g.guid())
httpServer.listen(9090, () => console.log("lisetning on 9090"))
let clients = {}

const wsServer = new websocketServer({
    'httpServer': httpServer
})

wsServer.on("request", request => {
    // connect
    const connection = request.accept(null, request.origin)
    const clientId = g.guid();

    connection.on("open", () => console.log("opened"));
    connection.on("close", () => console.log("close"));
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        console.log(result)
        if (result.method === "create") {
            console.log("creating game")
            const clientId = result.clientId;
            //  const gamdId = g.guid();
            const gameId = g.guid();


            games[gameId] = {
                "id": gameId,
                "balls": 20,
                "clients": []
            }

            const payLoad = {
                "method": "create",
                "game": games[gameId]
            }

            const con = clients[clientId].connection;
            connection.send(JSON.stringify(payLoad))
        }
        if (result.method === "join") {
            if (result.gameId) {
                const clientId = result.clientId
                console.log("xxxxxx")
                const gameId = result.gameId
                console.log("xxxxxx")
                let game = games[gameId]
                console.dir(game)
                console.log("xxxxxx")

                //if (game.clients.length >= 3) {
                //   // need to fail this freaking game
                // }
                const color = {
                    "0": "Red",
                    "1": "Green",
                    "2": "Blue"
                } [game.clients.length]

                game.clients.push({
                    "clientId": clientId,
                    "color": color
                })

                if (game.clients.length === 2) updateGameState();

                const payLoad = ({
                    "method": "join",
                    "game": game

                })
                game.clients.forEach(c => {
                    clients[c.clientId].connection.send(JSON.stringify(payLoad))
                })
            }


        }

        if (result.method === "play") {
            const clientId = result.clientId
            const gameId = result.gameId;
            const ballId = result.ballId;
            const color = result.color;

            let state = games[gameId].state;
            console.log("yessssssssssssssssssssssssssssssssssss")

            if (!state) {
                state = {}
            }
            debugger;
            state[ballId] = color

            games[gameId].state = state;

            // const game = games[gameId]

            // const payLoad = {
            //     "method": "play",
            //     "game": game
            // }
        }
    })

    clients[clientId] = {
        "connection": connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }

    connection.send(JSON.stringify(payLoad))


})

function updateGameState() {
    console.log(games)
    for (const g of Object.keys(games)) {
        console.log("yahooooXX")
        const game = games[g];
        const payLoad = {
            "method": "update",
            "game": game
        }
        games[g].clients.forEach(c => {
            console.log("about to send update to alllll you fucks")
            clients[c.clientId].connection.send(JSON.stringify(payLoad))
        })
    }

    setTimeout(updateGameState, 5000);
}