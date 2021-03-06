// POST body

fetch("http://localhost:3000/greet", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "YourName" }),
})
  .then((resp) => resp.text())
  .then(console.log);

// POST skip options
fetch("http://localhost:3000/greet", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "YourName",
})
  .then((resp) => resp.text())
  .then(console.log);

//***** READS ***** */

fetch("http://localhost:3000/greet")
  .then((resp) => resp.text())
  .then(console.log);
