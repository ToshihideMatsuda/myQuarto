var harukaFlag = getParam("user") == "toshihide" ? false : true
var userName = function() { return harukaFlag ? 'haruka' : 'toshihide' };
var infoData =  { userName: userName(), turn :false }
var firstTurn = false;

var yourPiece = { val : "", black : true, color : getColor()}
    
var boardData = {
    table : [
      { vals : [ { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false } ] },
      { vals : [ { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false } ] },
      { vals : [ { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false } ] },
      { vals : [ { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false }, { val : "", selected : false } ] }
    ],
    selected : getSelected()
  };

var piecesData = {
    table : [
      { vals : [ 
        { val : "●●", black : true , selected : false, used : false}, 
        { val : "●●", black : false, selected : false, used : false},  
        { val : "■■", black : true , selected : false, used : false},  
        { val : "■■", black : false, selected : false, used : false},   
      ] },
      { vals : [ 
        { val : "○○", black : true , selected : false, used : false}, 
        { val : "○○", black : false, selected : false, used : false}, 
        { val : "□□", black : true , selected : false, used : false}, 
        { val : "□□", black : false, selected : false, used : false}, 
      ] },
      { vals : [ 
        { val : "●", black : true , selected : false, used : false},
        { val : "●", black : false, selected : false, used : false},
        { val : "■", black : true , selected : false, used : false},
        { val : "■", black : false, selected : false, used : false},
      ] },
      { vals : [ 
        { val : "○", black : true , selected : false, used : false},
        { val : "○", black : false, selected : false, used : false}, 
        { val : "□", black : true , selected : false, used : false},
        { val : "□", black : false, selected : false, used : false}, 
      ] },
    ],
    color : getColor(),
    selected : getSelected()

  };

init();


function init() {
    boardData.table.forEach((line, _, __) => { 
      line.vals.forEach((e, _, __) => { 
        e.val ="　"
        e.selected = false
      })
    })

    piecesData.table.forEach((line, _, __) => { 
        line.vals.forEach((e, _, __) => { 
          e.selected = false
          e.used = false
        })
      })

    yourPiece.val   = ""
    yourPiece.black = true 
}


function selectClear() {
    boardData.table.forEach((line, _, __) => { 
        line.vals.forEach((e, _, __) => { 
            e.selected = false
        })
      })
      
    piecesData.table.forEach((line, _, __) => { 
        line.vals.forEach((e, _, __) => { 
          e.selected = false
        })
      })

}

function getColor()    { return  { black : "blackColor", brown : "brownColor" } }
function getSelected() { return  { yes   : "lightgrayBGColor", no  : "whiteBGColor" } }

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}