const path=require('path')
const express=require('express')
const rootDir=require('../utils/pathutils')//using file helper
const useRouter=express.Router()
useRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','home.html'))//Saving PAth
})
module.exports=useRouter