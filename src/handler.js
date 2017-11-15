var fs = require('fs');
var path = require('path');

function homeHandler(request, response) {
  var filePath = path.join(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('server error');
    }
    response.writeHead(200, 'Content-Type: text/html');
    response.end(file);
  });
}

function staticFileHandler(request, response, url) {
  var extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json'
  };

  var extension = url.split('.')[1];
  var filePath = path.join(__dirname, '..', url);

  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('server error');
    }
    response.writeHead(200, 'Content-Type: ' + extensionType[extension]);
    response.end(file);
  });
}

module.exports = {
  homeHandler,
  staticFileHandler,
};
