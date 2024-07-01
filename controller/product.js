const path = require("path");
const { Product } = require("../model/product");
const ejs = require("ejs");
exports.createProduct = async (req, res) => {
  let product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const docs = await Product.find();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getAllProductsSSR = async (req, res) => {
  try {
    const docs = await Product.find();
    ejs.renderFile(
      path.resolve(__dirname, "../view/card.ejs"),
      { products: docs },
      (err, str) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).send(str);
        }
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getOneProduct = async (req, res) => {
  try {
    const doc = await Product.findById(req.params.id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// exports.getByQuery = async (req, res) => {
//   console.log(req.params);
// try {
//   const response = await Product.find({ title: { $eq: "Princess" } });
//   res.status(200).json(response);
// } catch (err) {
//   res.status(400).json(err);
// }
// };
