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


var yourPieceVue = new Vue ({
  el: '#yourPiece',
  data: yourPiece,
  mounted: function() {
    // <p>apple</p>が出力される
  }
})
  
function selectBoard() {
  if(!infoData.turn) { notYourTurn(); return; }

}


function selectPiece() {
  if(!infoData.turn) { notYourTurn(); return; }
}

function notYourTurn() {
  alert("あなたのターンではありません。")
} 