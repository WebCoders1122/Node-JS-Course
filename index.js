const express = require("express");

const app = express();

//middleweres
// app.use("/abc", express.static("public"));
app.use(express.json());
// app.use((req, res, next) => {
//   console.log({
//     ip: req.ip,
//     hostname: req.hostname,
//     query: req.query,
//     method: req.method,
//     body: req.body,
//   });
//   next();
// });
const auth = (req, res, next) => {
  if (req.body.password === 123) {
    next();
  } else {
    res.sendStatus(401);
    return;
  }
};

// app.use(auth);

// app.use(express.urlencoded());

//endpoints
app.get("/", (req, res) => {
  // console.log(req);
  // res.send("hello");
  // res.sendFile("/home/maan/Desktop/GitHub/Node JS Course/public/data.json");

  console.log(req.query);
  res.json({ type: "GET" });
  // res.sendStatus(502);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ type: "POST" });
});
app.put("/", auth, (req, res) => {
  res.json({ type: "PUT" });
});
app.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
app.patch("/", (req, res) => {
  res.json({ type: "PATCHH" });
});

//assignments
//#1
app.get("/demo", (req, res) => {
  const queryData = req.query;
  console.log(queryData);
  res.json(queryData);
});
app.get("/demo/:name/:age/:subject", (req, res) => {
  const queryData = req.params;
  console.log(queryData);
  res.json(queryData);
});
app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server Started");
  }
});
