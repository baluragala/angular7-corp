let isDone: boolean = false;
//isDone = 10;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let fullName: string = `Bob Bobbington`;
let age: number = 37;

let person = {
  fullName,
  age
};
// let sentence: string = `Hello,

// my name is ${person}.

// I'll be ${person.age + 1} years old next month.

//     `;

console.log(`Person : ${person}`);

let numbers: Array<string> = [];
numbers.push("");

let OK = 200;
let WARN = 300;
let ERROR = 500;

enum Status {
  OK = 200,
  WARN = 300,
  ERROR = 500
}

let s: Status = Status.ERROR;

console.log("s", s);

let something;
something = false;
something = 10;
something = [];
something = {};

let statusCode: string | number | boolean = 200;
statusCode = "Good";
statusCode = true;

// function getAvailability():boolean | Promise<boolean> {
//     //some work
//     return new Promise
// }
