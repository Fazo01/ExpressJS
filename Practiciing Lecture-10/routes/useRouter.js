const express=require("express")
const useRouter=express.Router()
const path=require("path")

useRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","Views","home.html"))
})
module.exports=useRouter