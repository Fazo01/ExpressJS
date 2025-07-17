//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
function user(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    res.locals.userIsAuthorised = true; //new
  }
  next();
}
app.get("/", (req, res) => {
  console.log("Hello", req.url);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", user, (req, res) => {
  //new
  if (res.locals.userIsAuthorised) {
    //new
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.listen(PORT, () => {
  console.log(`This is the server link http://localhost:${PORT}`);
});
