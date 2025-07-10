const path=require('path')
const rootDir=require('./utils/pathutils')
const express=require('express')
const app=express()
const userRouter=require('./routes/useRouter')//Export Router
const Hostrouter=require('./routes/Hostrouter')//Export Router
app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
})

app.use(express.urlencoded())//parcel
app.use(userRouter)//Export Router
app.use("/host",Hostrouter)//Export Router /host for overall path sharing

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','page_404.html'))//Saving PAth
})
const PORT=3002
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})