/**
 * Very simple demo-server.
 * 
 * run with npm server, or node demo/server.js
 * 
 */

var static = require('node-static');

port = 8080

var file = new(static.Server)(__dirname+'/..');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(port);

console.log("Simple demo at http://localhost:"+port+"/demo/simple/");
console.log("Require demo at http://localhost:"+port+"/demo/simple_with_require/");
console.log("Hit Ctrl-C to stop demo server.");
