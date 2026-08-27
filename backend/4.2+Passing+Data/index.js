import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/submit", (req, res) => {
  const name = req.body["fName"] + req.body["lName"]
  res.render("index.ejs",{
    name: name
  })
});

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
