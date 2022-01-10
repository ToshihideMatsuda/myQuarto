const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 3000
});

const rooms = {
    room1: {}
}

/**
 * WebSocket 接続
 */
wss.on('connection', function connection(ws) {

    /**
     * WebSocket メッセージ受信
     * 
     * @param string json 
     */
    ws.on('message', function incoming(json) {

        console.log('message comming')
        // 受け取ったJSONを配列にパース
        const arg = JSON.parse(json)
        console.log(arg)
        // アクション毎の各処理を実行
        switch (arg.action) {
            case 'connect':     // Roomへの入室
                onJoin(arg)
                break;
            case 'disconnect':  // Roomからの退室
                onLeave(arg)
                break;
            default:            // その他アクション全般
                onAction(arg)
                break;
        }
    });

    /**
     * WebSocket 切断
     */
    ws.on('close', () => {
        delete rooms['room1'][ws.user]
    })

    /**
     * Roomへの入室
     * 
     * @param {Object} arg 
     */
    function onJoin(arg) {

        // set message
        rooms['room1'][arg.user] = arg

        // return json
        sendAll(arg)

    }

    /**
     * Roomからの退室
     * 
     * @param {Object} arg 
     */
    function onLeave(arg) {

        // delete user from rooms
        delete rooms['room1'][arg.user]

        // return json
        sendAll(arg)
    }

    /**
     * 移動
     * message move
     * 
     * @param {Object} arg 
     */
    function onAction(arg) {

        // set message 
        rooms['room1'][arg.user] = arg

        // emit event
        sendAll(arg)
    }

    /**
     * WebSocket 一斉送信
     */
    function sendAll(message) {
        wss.clients.forEach(client => {
            client.send(JSON.stringify(message))
        })
    }
})

           