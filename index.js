const http = require("http");
const fs = require("fs");

const products = fs.readFileSync("data.json", "utf-8");
const errorPage = fs.readFileSync("errorPage.html", "utf-8");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  switch (req.url) {
    case "/":
      res.end("Hello server");
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(products);
      break;

    default:
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
      res.end(errorPage);
      break;
  }
  //   console.log(req, res);
  //   res.setHeader("Content-Type", "text/html");
});
server.listen(3030);
