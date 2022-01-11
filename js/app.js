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

        selectClear()
        element.selected = true
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
      selectClear()
      element.selected = true
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
  
function detectBoard() {
  if(!infoData.turn)      { notYourTurn(); return; }

  var select = false
  var selectedValue = undefined
  boardData.table.forEach((line, _, __) => { 
    line.vals.forEach((e, _, __) => {  
      if( e.selected ) {
        select = true
        selectedValue = e
      }
    })
  })

  if(!select)               { alert("マス目が選択されていません"); return ;}
  if(firstTurn)             { alert("初回は駒を選択してください"); return ;}
  if(selectPiece.val == "") { alert("配置する駒がありません。相手に渡す駒を選択してください"); return ;}

  //sendPutPiece(,)
}


function detectPiece() {
  if(!infoData.turn)        { notYourTurn(); return; }
  if(selectPiece.val != "") { alert("あなたの駒を先に配置してください"); return ;}
  if(firstTurn)             { alert("初回は駒を選択してください"); return ;}
}

function notYourTurn() {
  alert("あなたのターンではありません。")
} 