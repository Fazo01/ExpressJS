// local module
const hostRouter=require("./routes/hostRouter")
const useRouter=require("./routes/useRouter")
const rootDir=require("./utils/pathUtil")
// External module
const path=require("path")
const express=require("express")
const app=express()

app.use((req,res,next)=>{
  console.log(req.method)
  next()
})
app.use(useRouter)
app.use("/host",hostRouter)
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"Views","page_404.html"))
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server link http://localhost:${PORT}`)
})