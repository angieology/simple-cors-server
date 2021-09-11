var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.text());

// // Access-Control-Allow-Methods
// method: "POST",
// // Access-Control-Allow-Headers
// allowedHeaders: "Content-Type", // application/json
// // Access-Control-Allow-Credentials
// // credentials:
// // Access-Control-Allow-Origin
// origin: "https://www.google.com",

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.google.com");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
  res.status(200).send(`Hi ${req.body.name}!`);
  // respond with body string
  // res.status(200).send(`Hello ${req.body}`);
});

app.listen(3000);
