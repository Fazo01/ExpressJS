//core module
const http = require("http");
//external module
const express=require('express')
//local module
const requestHandler=require('./user')
const app=express()
app.use((req,res,next)=>{
  console.log("Second Middleware",req.url,req.method)
  res.send('<p>Hello</p>')
  next()
})
app.use((req,res,next)=>{
  console.log("Second Middleware",req.url,req.method)
})
const server = http.createServer(app)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
