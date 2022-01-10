var harukaFlag = true
var userName = harukaFlag ? 'haruka' : 'toshihide';

var app = new Vue({
    el: '#userName',
    data: { userName: userName }
})

var boardData  = {
  table: [
    {
      id: '001',
      name: 'apple'
    },
    {
      id: '002',
      name: 'orange'
    }
  ]
}


var boardVue = new Vue ({
    el: '#board',
    data: boardData,
    mounted: function() {
      // <p>apple</p>が出力される
    }
  })


  