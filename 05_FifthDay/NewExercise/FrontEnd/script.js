// let arr1 = [1,2,3,5,6,8];
// let arr2 = [1,2,3,5,6,8];
// console.log(arr);
// arr1.hey = () => {
//     console.log("This is an array");
// }
// arr2.hey = () => {
//     console.log("This is an array");
// }



// Functions Factory

// function FuncFact() {
//     const obj = {
//         "name" : "Abhishek",
//         "age": 20,
//         "number" : 615031,
//         displayAge: function () {
//             console.log(this.age);
//         }
//     };
//     obj.displayAge();  // Calling the method to display the age
// }

// FuncFact();




// Example of this keyword

function outer(){
    let a= 10;
    let b = 20;
    function inner(){
        console.log(this.a = 10);
        console.log(this.b = 210);
    }
    inner();
}

outer();