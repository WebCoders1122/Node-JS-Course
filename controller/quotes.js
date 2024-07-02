const path = require("path");
const { Quote } = require("../model/quote");
const ejs = require("ejs");
const fs = require("fs");

// view functions
exports.getQoutesSsr = async (req, res) => {
  const quotes = await Quote.find();
  const doc = fs.readFileSync(
    path.resolve(__dirname, "../view/quote.ejs"),
    "utf-8"
  );
  // 1st method
  // let template = ejs.compile(path.resolve(__dirname, "../view/quote.ejs"));
  // let finaldoc = template({ quotes: quotes });
  // res.send(finaldoc);

  // 2nd method
  // ejs.render(doc, { quotes: quotes });
  // res.send(ejs.render(doc, { quotes: quotes }));

  ejs.renderFile(
    path.resolve(__dirname, "../view/quote.ejs"),
    { quotes: quotes },
    (err, str) => {
      res.status(200).send(str);
    }
  );
};

//functions
exports.create = async (req, res) => {
  const quote = new Quote(req.body);
  console.log(req.body);
  try {
    const doc = await quote.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getAll = async (req, res) => {
  const quotes = await Quote.find();
  res.status(200).json(quotes);
};
exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Quote.findById(id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.replace = async (req, res) => {
  const updatedQuote = req.body;
  const id = req.params.id;
  try {
    const doc = await Quote.findOneAndReplace({ _id: id }, updatedQuote, {
      returnDocument: "after",
    });
    res.status(201, "Replaced").json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.update = async (req, res) => {
  const quoteUpdate = req.body;
  const id = req.params.id;
  try {
    const doc = await Quote.findOneAndUpdate({ _id: id }, quoteUpdate, {
      returnDocument: "after",
    });
    res.status(201, "updated").json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.remove = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Quote.findOneAndDelete({ _id: id });
    res.status(201, "deleted").json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
