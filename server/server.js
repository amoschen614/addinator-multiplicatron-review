const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(request, response) {
  
  const urlPath = url.parse(request.url).pathname;
  const filePath = `.${urlPath}`;

  fs.readFile('./client/adder.html', (err, data) => {
    if (err) {
      response.end();
    } else {
      response.end(data.toString('utf-8'));
    }
  });
});

server.listen(3000, function() {
  console.log('Server listening...');
});
