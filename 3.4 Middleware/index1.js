import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}))//body parser
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
