const express=require("express");
const houtRouter=express.Router();

const path=require("path")

houtRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","Views","addHome.html"))
})
houtRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","Views","homeadd.html"))
})
module.exports=houtRouter