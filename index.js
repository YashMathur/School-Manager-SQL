var app = require('app');

var BW = require('browser-window');

app.on('ready', function(){
  var win = new BW({
    width:1200,
    height:800,
    resizable: false,
    frame: false
  })
  win.loadURL('file:\\'+__dirname+'\\index.html')
})
