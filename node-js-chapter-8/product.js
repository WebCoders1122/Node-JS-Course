const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const productSchma = new Schema({
  id: Number,
  title: { type: String, unique: true },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: [1, "worng minimun price"] },
  discountPercentage: {
    type: Number,
    min: [1, "worng minimun discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [1, "worng minimun rating"],
    max: [5, "wrong max rating"],
  },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchma);
