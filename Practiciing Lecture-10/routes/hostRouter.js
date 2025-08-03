const express=require("express");
const houtRouter=express.Router();
houtRouter.get("/add-home",(req,res,next)=>{
  res.send(`
    <form action="/add-home" method="POST">
      <input type="text" placeholder="Enter house name" name="homeName" />
      <input type="submit"/>
    </form>
    `)
})
houtRouter.post("/add-home",(req,res,next)=>{
  res.send(`<h1>Home is succesfully added</h1>
    <a href="/">Go to home</a>`)
})
module.exports=houtRouter