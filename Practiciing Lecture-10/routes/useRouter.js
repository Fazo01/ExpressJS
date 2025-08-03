const express=require("express")
const useRouter=express.Router()
useRouter.get("/",(req,res,next)=>{
  res.send(`<h1>Add home</h1>
    <a href="/add-home">Add Home</a>`)
})
module.exports=useRouter