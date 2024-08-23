const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Chat = require("./models/chat.js");


main().then(() => {
    console.log("Connections successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/insta'); //if your database has auth enabled
}

let newChat = [
    {
        from: 'Abhay',
        to: 'Durgesh',
        msg: 'Hello, how are you?',
        created_at: new Date(),
    },
    {
        from: 'Rajak ',
        to: 'Rani',
        msg: 'I am good, you ?',
        created_at: new Date(),
    },
    {
        from: 'Tinu',
        to: 'Jawan',
        msg: 'I am fine, you ?',
        created_at: new Date(),
    },
    {
        from: 'Basanti',
        to: 'Gabbar',
        msg: 'I am feel gilti',
        created_at: new Date(),
    }
]


Chat.insertMany(newChat).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

