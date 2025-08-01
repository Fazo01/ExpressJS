//external modules 
const express=require("express")
const app=express()


app.get('/',(req,res,next)=>{//Middleware get only match exact
  console.log("Hello World")
  next()
})
app.post('/submit-details',(req,res,next)=>{//Middleware post too
  console.log("Second Middleware")
  res.send("<p>Welcome to Submit Details Page</p>")
})
app.use('/',(req,res,next)=>{//Middleware use run first even if we have get
  console.log("Second Middleware")
  res.send("<p>Welcome to Complete Coding</p>")
})


//Port
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})