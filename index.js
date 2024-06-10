const http = require("http");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const errorPage = fs.readFileSync("errorPage.html", "utf-8");
const productPage = fs.readFileSync("productCard.html", "utf-8");
const products = data.products;

const server = http.createServer((req, res) => {
  //   console.log(req.method);

  if (req.url.startsWith("/product") && req.method === "GET") {
    if (req.url.split("/").length == 2) return res.end("Products Page");
    let index = req.url.split("/")[2];
    let product = products[index - 1];
    console.log("product");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    let modProductCard = productPage
      .replace("**title**", product.title)
      .replace("**thumbnail**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**description**", product.description);
    res.end(modProductCard);
    return;
  } else if (req.url.startsWith("/product") && req.method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("This is post request");
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end("Server is running on Port 3030");
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
