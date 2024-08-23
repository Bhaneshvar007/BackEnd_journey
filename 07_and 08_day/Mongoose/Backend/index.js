const { name } = require("ejs");
const express = require("express");
const app = express();
const mongoose = require('mongoose');

main().then(() => {
    console.log("Mongoose here !");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


//creating the class for models

const Student = mongoose.model("Student", userSchema);

// const student1 = [
//     {
//         name: "Durgesh",
//         email: "durgesh@test.com",
//         age: 20
//     }
// ]

// Student.insertMany(student1).then((res) => {
//     console.log("User Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));




// Student.find({age:{$gt:30}}).then((res) => {
//     console.log("User Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));


// Student.findById({_id:"66a9d9eb0ec5ddafc9a1b949"}).then((res) => {
//     console.log("Student Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));



// Student.updateOne({name:"Durgesh"},{age:200}).then((res) => {
//     console.log("Student Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));



// Student.updateMany({age:{$gte:200}},{age:50} ).then((res) => {
//     console.log("Student Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));


// Student.findOneAndUpdate({age:50},{name:"Durgesh Patle"} ).then((res) => {
//     console.log("Student Saved succesfully", res);
// }).catch(err => console.log("Errore !", err));


Student.findOneAndDelete({age:17}).then((res) => {
    console.log("Student Saved succesfully", res);
}).catch(err => console.log("Errore !", err));