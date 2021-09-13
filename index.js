var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
// enable receiving json body:
app.use(express.json());
// enable receiving text body:
// app.use(express.text());

// enable CORS everywhere
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://www.google.com");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// enable CORS on options
// app.options("/*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://www.google.com");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
//   res.send(200);
// });

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/greet", function (req, res) {
  res.send("Hey!");
});

app.post("/greet", function (req, res) {
  // enable receiving json body:

  res.status(200).send(`Hi ${req.body.name}!`);
  // enable receiving text body:

  // res.status(200).send(`Hello ${req.body}`);
});

app.listen(3000);
