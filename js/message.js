function login() {
    ws.send(
        JSON.stringify({
            action : "connect",
            user   : userName()
        })
    )
}

function sendStart() {
    ws.send(
        JSON.stringify({
            action : "start",
            user   : userName(),
            hTurn : Math.random() >= 0.5
        })
    )
}

function sendPutPiece(location, piece) {
    ws.send(
        JSON.stringify({
            action : "put",
            user   : userName(),
            location : location,
            piece  : piece
        })
    )
}

function sendChoicePiece(nextTurn,piece,location) {
    ws.send(
        JSON.stringify({
            action : "choice",
            user   : userName(),
            location : location,
            nextTurn : nextTurn,
            piece  : piece
        })
    )
}

function sendMessage() {
    ws.send(
        JSON.stringify({
            action  : "message",
            user    : userName(),
            message : infoData.message
        })
    )
}

var ws = new WebSocket('ws://localhost:3000/');
ws.onmessage = function (event) {
    document.getElementById("messages").innerHTML = "<div>" + event.data + "</div>" + document.getElementById("messages").innerHTML;
    console.log(JSON.parse(event.data));

    var message = JSON.parse(event.data)

    if(message.action == "start") {
        init()
        if(harukaFlag == message.hTurn){
            infoData.turn = true
            firstTurn = true
        }
        else {
            infoData.turn =false
            firstTurn = false
        }
    }
    else if(message.action == "choice") {
        infoData.turn = (message.nextTurn == harukaFlag)
        selectPiece.val   = message.piece.val
        selectPiece.black = message.piece.black
        selectPiece.bold  = message.piece.bold
        selectPiece.tall  = message.piece.tall

        var e  = piecesData.table[message.location[0] - 1 ].vals[message.location[1] -1]
        e.used = true
    }
    else if(message.action == "put") {
        selectPiece.val   = ""
        selectPiece.black = true
        selectPiece.tall  = false

        var e   = boardData.table[message.location[0] - 1 ].vals[message.location[1] -1]
        e.val   = message.piece.val
        e.black = message.piece.black
        e.bold  = message.piece.bold
        e.tall  = message.piece.tall
    }
    else if(message.action == "message") {
        if(message.user == userName()){
            infoData.message = ""
        }

        if(message.user == "toshihide"){
            infoData.toshihideMessage = message.message
        }else if(message.user == "haruka"){
            infoData.harukaMessage = message.message
        }


    }
};

ws.onopen = function(event) {
    login()
}