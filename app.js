var http = require('http');

http.createServer(function (req,res){

  res.write('hello this is my first server\n');
  res.write('This is running on port 8001... ');
  res.end();
}).listen(3001);