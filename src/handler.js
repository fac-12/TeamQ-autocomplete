var fs = require('fs');
var path = require('path');
var logic = require('./logic.js')
var allNames = require('./allnames.json');

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

function searchHandler(request, response, url){
  var searchValue = url.split("?")[1];
  var filePath = path.join(__dirname, "allnames.json");
  fs.readFile(filePath, "utf8", function(error, file){
    if(error){
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('server error');
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    var nameArray = logic.getMatchedNames(searchValue, JSON.parse(file));
    console.log(nameArray);
    response.end(JSON.stringify(nameArray));
  })
}

module.exports = {
  homeHandler,
  staticFileHandler,
  searchHandler
};
