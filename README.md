# myQuarto

遠方の妻と遊ぶためのWeb Quarto<br>
Quartoのルールは
https://ja.wikipedia.org/wiki/%E3%82%AF%E3%82%A2%E3%83%AB%E3%83%88_(%E3%83%9C%E3%83%BC%E3%83%89%E3%82%B2%E3%83%BC%E3%83%A0)
を参照

### アプリ動作動画
　![動画](/explains/movie.gif) 


### アプリ構成図
　![構成図](/explains/オンラインクアルト構成図.jpg) 


### アプリ概略

### 使用技術
#### インフラ(AWS)
AWS EC2 にて無料のLinux インスタンス（ec2-3-94-114-142.compute-1.amazonaws.com）を作成<br>

#### フロントエンド
html, css, javascript, Vue.js, WebSocket<br>

##### Vue.js
htmlとjavasriptのデータ同期を行う便利なライブラリという認識でOK。<br>
スッキリ書けて良きとの噂があったので今回初導入。（ https://jp.vuejs.org/index.html を参照）<br>

##### WebSocket
webページでリアルタイム通信を行う技術。通信データはjson形式。<br>以下はデータ例だけど何やってるかなんとなくわかるはず。<br>
   
    { action: 'put', user: 'haruka‘, location: [ 1, 4 ],  piece: { val: ‘○○‘,　black: true  } } 

#### サーバサイド
##### httpサーバ
フロントエンドで動作させるhtmlファイルを置いている。 <br>
http://ec2-3-94-114-142.compute-1.amazonaws.com でアクセス。<br>
原則、?user=toshihide をurlの最後につけるとtoshihideでログイン、何もつけないとharukaでログインする。<br>
?user=…はゴミセキュリティなので、本チャンでは絶対やってはいけない。

##### WebSocketサーバ
受け取ったデータをそのまま全ユーザに送る土管。Node.jsで動作<br>
ws://ec2-3-94-114-142.compute-1.amazonaws.com:3000/でアクセスする<br>
