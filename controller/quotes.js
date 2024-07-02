const { Quote } = require("../model/quote");

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
