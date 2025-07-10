const path=require('path')
const express=require('express')
const rootDir=require('../utils/pathutils')
const hostrouter=express.Router()
hostrouter.get("/add-home",(req,res,next)=>{
  console.log(req.url,req.method)
    res.sendFile(path.join(rootDir,'views','addHome.html'))//Saving PAth
})

hostrouter.post("/add-home",(req,res,next)=>{
  console.log(req.body)//parcel
  
    res.sendFile(path.join(rootDir,'views','homeadd.html'))//Saving PAth
})
module.exports=hostrouter