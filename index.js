const express = require("express");
const bodyParser = require("body-parser");
const quotesRoutes = require("./routes/quotes");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use("/quotes", quotesRoutes.router);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server Started");
  }
});
