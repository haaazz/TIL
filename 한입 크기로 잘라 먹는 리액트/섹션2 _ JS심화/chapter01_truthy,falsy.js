// Falsy한 값 7가지

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer 큰 수의 저장

if (!f1) {
  console.log("falsy");
} // falsy

// Truthy한 값 -> Falsy 7제외 전부 !!

let t1 = "hello";
let t2 = 123;
let t3 = {};
let t4 = [];
let t5 = () => {};

if (t5) {
  console.log("truthy");
} // truthy

function printName(person) {
  console.log(person.name);
}

let person = { name: "햠" };
printName(person);
