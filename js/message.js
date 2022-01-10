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

var ws = new WebSocket('ws://ec2-3-94-114-142.compute-1.amazonaws.com:3000/');
ws.onmessage = function (event) {
    document.getElementById("messages").innerHTML += "<div>" + event.data + "</div>";
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
};

ws.onopen = function(event) {
    login()
}