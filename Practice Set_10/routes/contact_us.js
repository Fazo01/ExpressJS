const path=require('path')
const express=require('express')
const pathutils=require('../utils/pathUtils')
const ContactRoute=express.Router()

ContactRoute.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for GET",req.url,req.method)
  res.sendFile(path.join(pathutils,'Views','contact_us.html'))
  })
ContactRoute.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for host GET",req.url,req.method,req.body)
  res.sendFile(path.join(pathutils,'Views','contact_success.html'))
})
module.exports=ContactRoute