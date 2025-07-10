// const http=require('http')
const express=require("express")
const bodyparser=require('body-parser')
const app=express();
app.use((req,res,next)=>{
  console.log("First Middleware",req.url,req.method)
  next()
})
app.use((req,res,next)=>{
  console.log("Second Middleware",req.url,req.method)
  next()
})
app.get("/",(req,res,next)=>{
  console.log("Handling / for GET",req.url,req.method)
  res.send(`<h1>Welcome</h1>`)
})
app.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for GET",req.url,req.method)
  res.send(`<form action="/contact-us" method="POST">
    <input type="text" placeholder="Name" name="name"/>
    <input type="text" placeholder="Email" name="email"/>
    
    <input type="Submit"/>
    </form>`)
})
app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for host GET",req.url,req.method,req.body)
  next()
})
app.use(bodyparser.urlencoded())//Parsing request that caused the send of input data from form
app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for host GET",req.url,req.method,req.body)
  res.send('<h1>we will contact you shortly</h1>')
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})