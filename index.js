require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const quotesRoutes = require("./routes/quotes");
const productsRoutes = require("./routes/products");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { auth } = require("./controller/auth"); //auth middleware from auth controller

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/quotes", auth, quotesRoutes.router);
app.use("/products", auth, productsRoutes.router);
app.use("/tasks", auth, taskRouter.router);
app.use("/users", auth, userRouter.router);
app.use("/auth", authRouter.router);
app.use("*", (req, resolve) => {
  resolve.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

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
