const express=require('express')
const app=express()
app.use((req,res,next)=>{
  console.log("dumy1")
  next()
})
app.use((req,res,next)=>{
  console.log("dumy2")
  next()
})
app.use((req,res,next)=>{
  console.log("return")
  next()
})
app.get("/",(req,res,next)=>{
  console.log("handle path",req.url,req.method)
  res.send("<h1>Welcome</h1>")
})
app.get("/contact-us",(req,res,next)=>{
  console.log("handle /contact-us path",req.url,req.method)
  res.send(`
    <form action="/contact-us" method='POST'>
      <input type='text' placeholder='Enter name' name="name"/>
      <input type='text' placeholder='Enter email' name="email"/>
      <input type="submit"/>
    </form>
    `)
  })
  app.post("/contact-us",(req,res,next)=>{
    console.log("Contact us page.")
    res.send("<h1>We will contact you</h1>")
  })
  

const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server link of port http://localhost:${PORT}`)
})