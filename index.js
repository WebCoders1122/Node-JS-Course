const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const { quotes } = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const app = express();

// middlewares
app.use(bodyParser.json());

// CRUD = create read update and delete operations || REST APIs
//#1 = Create
app.post("/quotes", (req, res) => {
  console.log(req.body);
  quotes.push(req.body);
  res.status(201).json(req.body);
});

//#2 read
app.get("/quotes", (req, res) => {
  res.status(200).json(quotes);
});
app.get("/quotes/:id", (req, res) => {
  const id = req.params.id;
  let index = quotes.findIndex((quote) => quote.id == id);
  res.status(200).json(quotes[index]);
});

// #3 = put and update
app.put("/quotes/:id", (req, res) => {
  const updatedQuote = req.body;
  const id = req.params.id;
  const index = quotes.findIndex((q) => q.id == id);
  quotes.splice(index, 1, updatedQuote);
  res.status(201, "Replaced").json(updatedQuote);
});
app.patch("/quotes/:id", (req, res) => {
  const quoteUpdate = req.body;
  const id = req.params.id;
  const index = quotes.findIndex((q) => q.id == id);
  const updatedQuote = { ...quotes[index], ...quoteUpdate };
  quotes.splice(index, 1, updatedQuote);
  res.status(201, "updated").json(updatedQuote);
});

//#4 = delete
app.delete("/quotes/:id", (req, res) => {
  const index = quotes.findIndex((q) => q.id == req.params.id);
  const deletedQuote = quotes[index];
  quotes.splice(index, 1);
  res.status(202, "Deleted").json(deletedQuote);
});

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server Started");
  }
});
