import express from "express";
import bodyparser from "body-parser";


const app = express();
const port = 5000;
let posts = [];

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))


app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts
    });
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(post => post.id === postId);
    res.render("edit.ejs", {
        post: post
    });
});

app.post("/edit/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(post => post.id === postId);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const postId = Number(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.redirect("/");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`)
})