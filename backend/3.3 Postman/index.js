import express from "express";
const app = express();
const port = 5000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data.....sends data to server for processing
  res.sendStatus(201);
});

app.put("/user/mehak", (req, res) => {
  //updates current resource or simply recreates it when user provides updated copy of resource
  res.sendStatus(200);
});

app.patch("/user/mehak", (req, res) => {
  //updates part of existing resource,user tells us which part need to be updated....maybe the age or email
  res.sendStatus(200);
});

app.delete("/user/mehak", (req, res) => {
  //Deleting user 
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
