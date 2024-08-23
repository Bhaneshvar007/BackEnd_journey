const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Chat = require("./models/chat.js");
 
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended : true}))

main().then(() => {
    console.log("Connections successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/insta'); //if your database has auth enabled
}

app.get("/chats" ,async(req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs" , {chats})
})


app.get("/chats/new",(req,res)=>{
res.render("new");
});


app.post("/chats/new" , (req,res)=>{
    const {from , to,msg} = (req.body);
    let newChat = new Chat({from:from , to:to , msg:msg});
    Chat.insertMany(newChat);
    console.log(newChat);
    res.redirect("/chats");
})  

app.get("/", (req, res) => {
    res.send("Root is Working !!!");
})

app.listen(3000, () => {
    console.log("Server on listen the port 3000");
})