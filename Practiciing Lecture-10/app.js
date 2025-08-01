const { urlencoded } = require("body-parser")
const express=require("express")
const app=express()

app.use(express.urlencoded())
app.use((req,res,next)=>{
  console.log("Dummy 1")
  next()
})
app.use((req,res,next)=>{
  console.log("Dummy 2")
  next()
})
app.get("/",(req,res,next)=>{
  res.send("<h1>Welcome</h1>")
})
app.get("/contact-us",(req,res,next)=>{
  res.send(`
      <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter your name" name="name"/>
        <input type="text" placeholder="Enter your email" name="email"/>
        <input type="submit"/>
      </form>
    `)
})

app.post("/contact-us",(req,res,next)=>{
  console.log("body parser",req.body)
  res.send("<h1>Minecraft</h1>")
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server link http://localhost:${PORT}`)
})