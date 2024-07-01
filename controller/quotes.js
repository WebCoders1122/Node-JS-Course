//functions
exports.create = (req, res) => {
  console.log(req.body);
  quotes.push(req.body);
  res.status(201).json(req.body);
};
exports.getAll = (req, res) => {
  res.status(200).json(quotes);
};
exports.getOne = (req, res) => {
  const id = req.params.id;
  let index = quotes.findIndex((quote) => quote.id == id);
  res.status(200).json(quotes[index]);
};
exports.replace = (req, res) => {
  const updatedQuote = req.body;
  const id = req.params.id;
  const index = quotes.findIndex((q) => q.id == id);
  quotes.splice(index, 1, updatedQuote);
  res.status(201, "Replaced").json(updatedQuote);
};
exports.update = (req, res) => {
  const quoteUpdate = req.body;
  const id = req.params.id;
  const index = quotes.findIndex((q) => q.id == id);
  const updatedQuote = { ...quotes[index], ...quoteUpdate };
  quotes.splice(index, 1, updatedQuote);
  res.status(201, "updated").json(updatedQuote);
};
exports.remove = (req, res) => {
  const index = quotes.findIndex((q) => q.id == req.params.id);
  const deletedQuote = quotes[index];
  quotes.splice(index, 1);
  res.status(202, "Deleted").json(deletedQuote);
};
