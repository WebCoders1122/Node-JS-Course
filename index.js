const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req, res);
  res.setHeader("Content-Type", "text/html");
  res.end("hello");
});
server.listen(3030);
