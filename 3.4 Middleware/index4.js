import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Optional: avoid global state for user-specific data
// Use local variable instead inside the route

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware only for /submit
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  req.bandName = req.body["street"] + req.body["pet"]; // Save to request object
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Apply the middleware here only
app.post("/submit", bandNameGenerator, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName} ✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
