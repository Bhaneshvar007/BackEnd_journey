const { log } = require("console");
const express = require("express");
const path = require("path"); 
const app = express();
const InstaData = require("./Data.json");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));
// app.use(express.static("public"))  // Sort way
app.use(express.static(path.join(__dirname,  "/public")));



// app.get('/Followers', (req, res) => {
//     let followers = ["Bhaneshvar004" , "Abhishek_ugr" , "Sakharam-0001","Abhay-45" , "Durgesh-02"];
//     let following = ["rina" , "mina" , "rani","preeti" , "luna"];
//     res.render('Followers', { followers ,following});
// });


// we will creating a json format & use it in to a folloernse
// app.get("/Insta/:username" , (req,res)=>{
//     let {username} = req.params;
//     const data = InstaData[username];
//     if(data){
//         res.render('InstaPage', {data});
//     }
//     else{
//     res.render("Error")
//     }    
// })



app.get('/Linkd', (req, res) => {
    // Sample data
    const user = "Abhishek_1232";
    const jtitle = "WebDeveloper & SoftWare Developer";
    const mtConnection = "500+";
    res.render('Linkd',{user,jtitle,mtConnection});
});
 

app.listen(4000 , ()=>{
    console.log("server redy");
})