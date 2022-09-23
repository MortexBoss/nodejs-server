const http = require('http'); 
let port = 8080;
let WHT="Lars";

http.createServer((request, response) => { 
 response.writeHead(200, { 
 'Content-Type': 'text/html' 
}); 
  let a = 999 * 6567;
  response.write(`<html><body><h2>` + a + `</h2><h1>Das ist HTML</h1> <p>Und das ein Absatz!</p></body></html>`);
  response.end(); 
}).listen(port);

// Nachricht, die im Terminal ausgegeben wird.
console.log(WHT + 'Statischer Webserver läuft auf\n  => http://localhost:' + port + '/\nCTRL + C zum Beenden');