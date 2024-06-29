require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const quotesRoutes = require("./routes/quotes");
const productsRoutes = require("./routes/products");
const taskRouter = require("./routes/task");
const mongoose = require("mongoose");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use("/quotes", quotesRoutes.router);
app.use("/products", productsRoutes.router);
app.use("/tasks", taskRouter.router);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server Started");
  }
});

const main = async () => {
  mongoose.connect(process.env.MONGODB_CONNECT_URL);
  console.log("database Connected");
};
main().catch((err) => console.log(err));
