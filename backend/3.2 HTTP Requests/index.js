import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    console.log("GET / was received");
    res.send("<h1>Hello </h1><p> Welcome to my Website :) </p>");
});
app.get("/about", (req, res) => {
    console.log("GET / was received");
    res.send("<h1>I'm Mehak Anwar </h1><h3>i'm persuing bachelors deggree in cs.</h3>");
});
app.get("/contact", (req, res) => {
    console.log("GET / was received");
    res.send("<h2>Hello feel free to contact me  </h2><h5>Contact: +92 3157322553 </h5>");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});