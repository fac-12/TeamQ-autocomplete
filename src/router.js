var {staticFileHandler, homeHandler, searchHandler} = require('./handler')

function router(request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint === "/" | endpoint === "/index.html") {
    homeHandler(request, response);
  } else if (endpoint.indexOf('/public') !== -1) {
    staticFileHandler(request, response, endpoint);
  } else if (endpoint.indexOf('/search') !== -1){
    searchHandler(request, response, endpoint);
  } else if (endpoint.indexOf('/name-data') !== -1) {
    nameDataHandler(request, response, endpoint);
  } else {
    response.writeHead(404);
    response.end('404, NOT FOUND');
    return;
  }
}


module.exports = router;
