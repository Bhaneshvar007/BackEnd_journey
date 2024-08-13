const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');



app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
// midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))



// Creating the object for using our page
let posts = [
    {
        id: uuidv4(),
        username: "Jhone due",
        content: "PortFolip use exmaple name"
    },
    {
        id: uuidv4(),
        username: "Elon musk",
        content: "Cyber truck on tranding"
    },
    {
        id: uuidv4(),
        username: "virat kohli",
        content: "I am the best in T20 world cup"
    }
]


// render the home page
app.get("/posts", (req, res) => {
    res.render("index", { posts })
})


// create a new page using the create post button 
app.get("/posts/new", (req, res) => {
    res.render('new', { uuidv4 })
})



// pusing all tha element in to our post
app.post("/posts", (req, res) => {
    let { username, content } = (req.body);
    let id = uuidv4();
    posts.push({ username, content, id });
    res.redirect('/posts')
});


//calling for read the details
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((e) => id === e.id);
    res.render('show.ejs', { post })
    res.send("req working");
})



// update operation using the patch for getting the data from the user
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => (id === p.id));
    post.content = newContent;
    // res.send("patch request working");
    res.redirect("/posts")
    console.log(post);
}) 



// Geting the data from the user and update the data
app.get("/posts/:id/edit" , (req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => (id === p.id));
    res.render("edit.ejs" , {post});
})



 // Delete the page in our project;
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id !== id);
    res.redirect("/posts");
})


// Delete all posts
app.delete("/posts", (req, res) => {
    posts = [];
    res.redirect("/posts");
})

app.listen(3000, () => {    
    console.log("Server started on ", 3000);
})