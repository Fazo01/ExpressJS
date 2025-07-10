// const http=require('http')
const path=require('path')
const pathutils=require('./utils/pathUtils')
const express=require("express")
const bodyparser=require("body-parser")
const app=express();
const homePG=require('./routes/home')

const ContacePG=require('./routes/contact_us')
app.use(express.urlencoded())
app.use(homePG)
app.use(ContacePG)
app.use((req,res,next)=>{
  res.sendFile(path.join(pathutils,'Views','page_404.html'))
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})