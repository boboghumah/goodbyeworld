//
// var names = ['tobby', 'clat', 'bob', 'bobclat', 'john'];
//
//
// function matchName(name) {
//     for (var i=0; i < names.length; i++) {
//         var nom = names[i];
//         if (nom.indexOf(name) > -1) {
//             console.log(nom);
//         }
//     }
//
//     /*names.forEach(function(nom) {
//         if (nom.indexOf(name) > -1) {
//             console.log(nom);
//         }
//     });*/
// }
//
// var userInput = process.argv[2];
// matchName(userInput);

var http = require("http");
var fs = require("fs");
http.createServer(function (request, response){
    if (request.url === '/' || request.url === '/index.html') {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
            response.write(data);
            response.end();
            //response.end('Hello World\n');
        });
    } else if (request.url === '/anotherpage.html') {
        console.log('called anotherpage');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('called anotherpage');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end();
    }
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');