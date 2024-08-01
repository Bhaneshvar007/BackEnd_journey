const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`Listen port  , ${port}`);
});

// app.use((req, res) => {
//     console.log("request recive");
//     // res.send({ // Object format
//     //     name : "Abhishek",
//     //     age:20,
//     //     clg:"Takshshila"
//     // })

//     // let table = "<table><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>"
//     // res.send(table);



    app.get('/', (req, res) => {
        res.send('GET request printed');
    });
    
    
    app.get('/about', (req, res) => {
        res.send('GET request to about');
    });

    app.get('/project', (req, res) => {
        res.send('GET request to project');
    });
    
    app.get('/services', (req, res) => {
        res.send('GET request to services');
    });

