const express = require("express");
const bodyParser = require("body-parser");
const quoteController = require("./controller/quotes");

const app = express();

// middlewares
app.use(bodyParser.json());

// CRUD = create read update and delete operations || REST APIs
app.post("/quotes", quoteController.create);
app.get("/quotes", quoteController.getAll);
app.get("/quotes/:id", quoteController.getOne);
app.put("/quotes/:id", quoteController.replace);
app.patch("/quotes/:id", quoteController.update);
app.delete("/quotes/:id", quoteController.remove);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server Started");
  }
});
