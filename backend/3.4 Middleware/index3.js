import express from "express";
const app = express();
const port = 5000;


//custom middleware.. LOGGER
function logger(req,res,next){
  console.log("req method: ", req.method+ "\n" + "req url: ", req.url)
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
