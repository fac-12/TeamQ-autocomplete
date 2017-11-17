var {staticFileHandler, homeHandler, apiHandler} = require('./handler');
var logic = require('./logic.js');

function router(request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint === "/" || endpoint === "/index.html") {
    homeHandler(request, response);
  } else if (endpoint.indexOf('/public') !== -1) {
    staticFileHandler(request, response, endpoint);
  } else if (endpoint.indexOf('/search') !== -1){
    apiHandler(request, response, endpoint, logic.getMatchedNames);
  } else if (endpoint.indexOf('/name-data') !== -1) {
    apiHandler(request, response, endpoint, logic.getNameData);
  } else {
    response.writeHead(404);
    response.end('404, NOT FOUND');
    return;
  }
}


module.exports = router;
