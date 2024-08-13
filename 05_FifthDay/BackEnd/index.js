const express = require("express");
const app = express();


const port = 2000;


// midleWare

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/resistor" , (req , res)=>{
    let {user , password} = req.query;
    res.send(`Get ResPonse , WellCome ${user} ,  ${password}`);
})
app.post("/resistor" , (req , res)=>{
    let {user,password} = (req.body);
    res.send(`Post ResPonse , WellCome ${user} ,  ${password}`);
 })
 
app.listen(port , ()=>{
    console.log(`Server Started on port${port}`);
}) 