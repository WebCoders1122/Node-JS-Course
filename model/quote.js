const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  id: Number,
  quote: String,
  author: String,
});

exports.Quote = mongoose.model("Quote", quoteSchema);
