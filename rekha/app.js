import express from "express"
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express()
const PORT=3000

app.use(bodyParser.urlencoded({ extended: true }));
//Authentication

function user(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    res.locals.userIsAuthorised = true; //new
  }
  next();
}
app.post("/check", user, (req, res) => {
  //new
  if (res.locals.userIsAuthorised) {
    //new
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/Views/Login.html')
})
app.listen(PORT,()=>{
  console.log(`Server Link http://localhost:${PORT}`)
})