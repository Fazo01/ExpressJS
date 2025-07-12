//core module
const http = require("http");
//external module
const express=require('express')
//local module
const requestHandler=require('./user')
const app=express()
app.use("/",(req,res,next)=>{
  console.log("firsy Middleware",req.url,req.method)
  next()
})
app.post("/submit",(req,res,next)=>{
  console.log("Second Middleware",req.url,req.method)
  res.send('<p>Submit</p>')
})
app.use("/",(req,res,next)=>{
  console.log("third Middleware",req.url,req.method)
  res.send('<p>Submit 3</p>')
})
const server = http.createServer(app)
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
