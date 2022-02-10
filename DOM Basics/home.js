//-------------------- BASIC STUFF----------------------

// console.log("console msg");
// alert("popup alert msg");


// document.getElementById("paragraph").innerHTML = "<h1> HEADER </h1>";

// let age = prompt("What is your age");
// document.getElementById("paragraph").innerHTML = `<h1> Age of ${age} </h1>`;



// NUMBERS IN JAVASCRIPT

// let x = 10;
// let y = 5.5;

// x +=1;

// console.log(x);


//------------------- FUNCTIONS ----------------

// fun();
// function fun()
// {
//     console.log("fun: called")
//     return 5;
// }

// Function that takes the name and returns name with greating

// /**
//  * 
//  * @param {string} name 
//  * @returns {string}
//  */
// // function greeting(name)
// // {
// //     return "Hello! " + name;
// // }

// // console.log(greeting("Sergio"))

// // Function that log's all numbers from zero to and including N

// logToInteger(10);

// /**
//  * @param {Number} n 
//  */
// function logToInteger(n)
// {
//     for (let i = 0; i <= n; i++) 
//     {
//         console.log(i);
//     }
// }

// --------------LOOPS--------------------------

// WHILE LOOP

// let x = 100;

// while(x > 0.001)
// {
//     console.log(x);
//     x /= 2;
// }

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     console.log(i); 
// }


// -------------DATA TYPES----------------------

// let number = 10.1;

// let bigInt = 10n;

// let symbol = Symbol(1);

// let string = "text";

// let bool = true;

// let undefined;

// let nothing = null;

// let array = [1,2,3,'text'];

// let object = {x: "text", y: 5}

// -------------------STRING-----------------------

// let text = 'sample text';
// let name = 'Samplename';

// console.log(text + "\n".concat(name)); // new line
// console.log(text.indexOf("not fount so we get -1")); // find index of substring
// console.log(text.slice(0,100)); // get substring
// console.log(text.replace("text","xman")); // find and replace
// console.log(text.charAt(5));
/*
// Split every char
let textChars = text.split("");
for (let i = 0; i < textChars.length; i++) 
{
    const element = textChars[i];
    console.log(element);    
}
*/

//--------------------ARRAYS------------------------

// let array = ["zero","one","two"];
// let arrayConstructor  = new Array("0","1","2");
// let emptyArray = [];
// let emptyArrayConstructor = new Array();

// array.forEach(e => {
//     console.log(e);
// });

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// console.log(array.toString());
// console.log(array.join("--"));

// let unionArray = array.concat(arrayConstructor);
// console.log(unionArray);
// console.log(unionArray.sort());

// let numbers = [1,50,-9,1,20,6];
// console.log(numbers.sort((a, b) => a-b)); // sorting with lambda

// console.log(emptyArray);

//--------------------OBJECTS-----------------------

// let student = 
// {
//     firstName: "Sergio",
//     lastName: "Stankovik",
//     age:25,
//     height:170,

//     /**
//      * @returns string that contains student info
//      */
//     studentInfo: function()
//     {
//         return this.firstName + "\n" + this.lastName + "\n" + this.age + "\n" + this.height;
//     }
// };

// console.log(student.firstName);
// console.log(student.age);
// console.log(student.studentInfo());

// -----------------CONDITIONALS------------------

// if(true)
// {
    
// }
// else
// {

// }

// let x = 11;
// switch (x) 
// {
//     case 10:
//         console.log("its 10");
//         break;

//     default:
//         console.log("its not 10");
//         break;
// }



// -------------------JSON-----------

// let studentsJSON = `[
//     {
//         "name": "Sergio",
//         "age": 25,
//         "height":170
//     },
//     {
//         "name": "Mirivoj",
//         "age": 26,
//         "height":180
//     }
// ]`;

// let students = JSON.parse(studentsJSON);

// students.forEach(e => {
//     console.log(e);
// });





