var http = require('http');
var port = 8000;
var router = require('./router.js');
var server = http.createServer(router);

server.listen(port, function() {
  console.log('all systems go');
})
