const express=require("express");
const houtRouter=express.Router();
const rootDir=require("../utils/pathUtil")
const path=require("path")

houtRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","addHome.html"))
})
houtRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","homeadd.html"))
})
module.exports=houtRouter