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
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: 60000 },
//   })
// );
app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/quotes", auth, quotesRoutes.router);
app.use("/products", auth, productsRoutes.router);
app.use("/tasks", auth, taskRouter.router);
app.use("/users", auth, userRouter.router);
app.use("/auth", authRouter.router);
// app.get("/session", function (req, res, next) {
//   if (req.session.views) {
//     req.session.views++;
//     res.setHeader("Content-Type", "text/html");
//     res.write("<p>views: " + req.session.views + "</p>");
//     res.write(
//       "<p>expires in: " +
//         req.session.cookie.maxAge / 1000 +
//         "s" +
//         req.session.cookie.token +
//         "</p>"
//     );
//     res.end();
//   } else {
//     req.session.views = 1;
//     res.end("welcome to the session demo. refresh!");
//   }
// });
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
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
