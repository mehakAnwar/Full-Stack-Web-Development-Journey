import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,re)=>{
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
