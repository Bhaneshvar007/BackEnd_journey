const express = require('express');
const app = express();
const path = require('path');

const port = 4000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

// Define a route for the home page
// app.get('/', (req, res) => {
//     res.render('../home');
// });

// aceess thrugh the path directory
// app.get('/home', (req, res) => {
//     res.render('home');  
// });


// // Sending the data in to a home.ejs
app.get('/rollDice', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.render('rollDice', { randomNumber });
});


// app.get('/Instagram', (req, res) => {
//     // Sample data
//     const user = "Abhishek_1232";
//     const folowers = 1000;
//     res.render('Instagram',{user,folowers});
// });

app.get('/Followers', (req, res) => {
    let followers = ["Bhaneshvar004" , "Abhishek_ugr" , "Sakharam-0001","Abhay-45" , "Durgesh-02"];
    let following = ["rina" , "mina" , "rani","preeeti" , "luna"];
    res.render('Followers', { followers ,following});
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
