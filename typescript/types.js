"use strict";
var isDone = false;
//isDone = 10;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var fullName = "Bob Bobbington";
var age = 37;
var person = {
    fullName: fullName,
    age: age
};
// let sentence: string = `Hello,
// my name is ${person}.
// I'll be ${person.age + 1} years old next month.
//     `;
console.log("Person : " + person);
var numbers = [];
numbers.push("");
var OK = 200;
var WARN = 300;
var ERROR = 500;
var Status;
(function (Status) {
    Status[Status["OK"] = 200] = "OK";
    Status[Status["WARN"] = 300] = "WARN";
    Status[Status["ERROR"] = 500] = "ERROR";
})(Status || (Status = {}));
var s = Status.ERROR;
console.log("s", s);
var something;
something = false;
something = 10;
something = [];
something = {};
var statusCode = 200;
statusCode = "Good";
statusCode = true;
// function getAvailability():boolean | Promise<boolean> {
//     //some work
//     return new Promise
// }
