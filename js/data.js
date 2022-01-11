var harukaFlag = getParam("user") == "toshihide" ? false : true
var userName = function() { return harukaFlag ? 'haruka' : 'toshihide' };
var infoData =  { userName: userName(), turn :undefined, toshihideMessage:"", harukaMessage:"", message:""}
var firstTurn = false;

var selectPiece = { val : "", black : true, color : getColor()}
    
var boardData = {
    table : [
      { vals : [ 
        { val : "", black : true, location:[1,1] }, 
        { val : "", black : true, location:[1,2] }, 
        { val : "", black : true, location:[1,3] }, 
        { val : "", black : true, location:[1,4] } ] 
      },
      { vals : [ 
        { val : "", black : true, location:[2,1] }, 
        { val : "", black : true, location:[2,2] }, 
        { val : "", black : true, location:[2,3] }, 
        { val : "", black : true, location:[2,4] } ] 
      },
      { vals : [ 
        { val : "", black : true, location:[3,1] }, 
        { val : "", black : true, location:[3,2] }, 
        { val : "", black : true, location:[3,3] }, 
        { val : "", black : true, location:[3,4] } ] 
      },
      { vals : [ 
        { val : "", black : true, location:[4,1] }, 
        { val : "", black : true, location:[4,2] }, 
        { val : "", black : true, location:[4,3] }, 
        { val : "", black : true, location:[4,4] } ] 
      },
    ],
    color : getColor(),
    selected : getSelected()
  };

var piecesData = {
    table : [
      { vals : [ 
        { val : "●●", black : true , used: false, location:[1,1]}, 
        { val : "●●", black : false, used: false, location:[1,2]},  
        { val : "■■", black : true , used: false, location:[1,3]},  
        { val : "■■", black : false, used: false, location:[1,4]},   
      ] },
      { vals : [ 
        { val : "○○", black : true , used: false, location:[2,1]}, 
        { val : "○○", black : false, used: false, location:[2,2]}, 
        { val : "□□", black : true , used: false, location:[2,3]}, 
        { val : "□□", black : false, used: false, location:[2,4]}, 
      ] },
      { vals : [ 
        { val : "●", black : true , used : false, location:[3,1]},
        { val : "●", black : false, used : false, location:[3,2]},
        { val : "■", black : true , used : false, location:[3,3]},
        { val : "■", black : false, used : false, location:[3,4]},
      ] },
      { vals : [ 
        { val : "○", black : true , used : false, location:[4,1]},
        { val : "○", black : false, used : false, location:[4,2]}, 
        { val : "□", black : true , used : false, location:[4,3]},
        { val : "□", black : false, used : false, location:[4,4]}, 
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
        e.black = true
        e.selected = false
      })
    })

    piecesData.table.forEach((line, _, __) => { 
        line.vals.forEach((e, _, __) => { 
          e.selected = false
          e.used = false
        })
      })

    selectPiece.val   = ""
    selectPiece.black = true 
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