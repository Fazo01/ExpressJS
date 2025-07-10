// const http=require('http')
const express=require("express")
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
    <input type="text" placeholder="Email" name="Email"
    </form>
    <input type="Submit"/>`)
})
app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for host GET",req.url,req.method)
  res.send('<h1>we will contact you shortly</h1>')
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})