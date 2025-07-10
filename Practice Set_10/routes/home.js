const path=require('path')
const express=require('express')
const pathutils=require('../utils/pathUtils')
const homeRoute=express.Router()
// app.use((req,res,next)=>{
//   console.log("First Middleware",req.url,req.method)
//   next()
// })
// app.use((req,res,next)=>{
//   console.log("Second Middleware",req.url,req.method)
//   next()
// })
homeRoute.get("/",(req,res,next)=>{
  console.log("Handling / for GET",req.url,req.method)
  res.sendFile(path.join(pathutils,'Views','home.html'))
})
module.exports=homeRoute