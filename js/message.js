function login() {
    ws.send(
        JSON.stringify({
            action : "connect",
            user   : userName
        })
    )
}

function startGame() {
    ws.send(
        JSON.stringify({
            action : "start",
            user   : userName
        })
    )
}

var ws = new WebSocket('ws://ec2-3-94-114-142.compute-1.amazonaws.com:3000');
ws.onmessage = function (event) {
    document.getElementById("messages").innerHTML += "<div>" + event.data + "</div>";
    console.log(JSON.parse(event.data));
};