import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express()
const PORT=3000

app.use(bodyParser.urlencoded({ extended: true }));
//Authentication

function user(req, res, next) {
  const {password,email} = req.body
  // const {email}=req.body["email"];
  if (password === "admin"&& email==="admin@gmail.com") {
    res.locals.userIsAuthorised = true; //new
  }
  next();
}

app.post("/dashboard", user, (req, res) => {
  //new
  if (res.locals.userIsAuthorised) {
    //new
    res.sendFile(__dirname + "/Views/dashboard.html");
  } else {
    res.sendFile(__dirname + "/Views/login.html");
  }
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/Views/Login.html')
})
app.listen(PORT,()=>{
  console.log(`Server Link http://localhost:${PORT}`)
})