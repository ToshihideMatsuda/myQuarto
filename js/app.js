var infoVue = new Vue({
    el: '#infoVue',
    data: infoData
})

var boardVue = new Vue ({
    el: '#board',
    data: boardData,
    mounted: function() {
      // <p>apple</p>が出力される
    },
    methods: {
      clicked: function (element, event) {
        if(!infoData.turn) { notYourTurn(); return; }
        if(firstTurn)           { alert ("初回は駒を選択してください"); return }
        if(element.val != "　") { alert ("すでに駒が置かれています"); return} 

        if(!confirm("(" + element.location[0]  + "," + element.location[1] + ") に駒を配置しますか？")) return;

        sendPutPiece(element.location,selectPiece);
      }
    }
  })



var piecesVue = new Vue ({
  el: '#pieces',
  data: piecesData,
  mounted: function() {
    // <p>apple</p>が出力される
  },
  methods: {
    clicked: function (element, event) {
      if(!infoData.turn) { notYourTurn(); return; }
      if(selectPiece.val != "") {alert("先に駒を配置してください"); return;}

      if(!confirm("駒: " + element.val   + "\r\n" + 
        "色: " + (element.black ? "黒" : "茶") + "\r\n" + 
        "高さ: " + (element.tall ? "高" : "低") + "\r\n" +
        (firstTurn ? "を選択しますか？" : "を相手に渡しますか？"))) return;

      
      var nextTurn = true
      if(firstTurn) {
        firstTurn = false
        nextTurn = harukaFlag
      }
      else {
        nextTurn = !harukaFlag
      }

      sendChoicePiece(nextTurn,element,element.location);
    }
  }
})


var selectPieceVue = new Vue ({
  el: '#selectPiece',
  data: selectPiece,
  mounted: function() {
    // <p>apple</p>が出力される
  }
})

function notYourTurn() {
  alert("あなたのターンではありません。")
} 