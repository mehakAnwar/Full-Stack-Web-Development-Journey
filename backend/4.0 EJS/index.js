import express from "express";
const app = express();
const port=5000;

app.get("/", (req, res) => {
    const currentDay = new Date()
    const day = currentDay.getDay();

    let daytype= "weekday"
    let advice= "have some patience!" 

    if(day === 0 || day === 6 ){
        daytype = "weekend";
        advice = "have some fun!"
    }

  res.render("index.ejs",{
    day : daytype,
    msg: advice
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});