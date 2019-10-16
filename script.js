let obj = {}; // empty object

obj = {
  key1: "value1", // property
  key2: "value2" // property
};

const student = {
  name: "Michael",
  age: 32,
  email: "michael@ironhack.com",
  "home address": "LobeckStr. 36"
};

student.name; // "Michael"
student["email"]; // "michael@ironhack.com"
// student.home address; ❌
student["home address"]; // "LobeckStr. 36"

const keyName = "age";

student[keyName]; // 32

student.keyName; // undefined

// ["name", "email", "age"].forEach(function(key) {

// Object.keys() returns an array with all the keys in an object
const keys = Object.keys(student);
keys.forEach(function(key) {
  console.log("key: ", key);
  console.log("value: ", student[key]);
});

// Object.values() returns an array with all the values

// Object.entries() returns an array with all the properties as tuples [key, value]

// iterating over the keys in an object with a for in loop
for (const key in student) {
  console.log(key, student[key]);
}

// ⚠️ 🚨 Equivalent for arrays and strings
const arr = ["a", "bc", "def"];
for (const item of arr) {
  console.log(item);
}

// Objects are mutable

// dot notation
student.nationality = "German";
// [] notation
student["age"] = 28;

student.phoneNumbers = [123, 456];
student.phoneNumbers[0]; // 123

// nested non-primitives are still mutable
student.phoneNumbers[0] = 789;
student.phoneNumbers[0]; // 789

student.address = {
  streetName: "LobeckStr.",
  streetNumber: 36,
  city: "Berlin"
};

student.address.zipCode = 10000;
student.address.zipCode;
console.log(student);

// deleting a property
delete student["home address"];

// remove the last element from a nested array in the object
student.phoneNumbers.pop();

// prevent any mutations to an object (or array)
Object.freeze(student);

console.clear();

// Value vs Reference

const title = "javaScript: The Good Parts";
title[0] = "J";
// javaScript: The Good Parts

let string1 = "Hello";
let string2 = "Hello";
// Primitives are copied by value
let string3 = string1;

// Primitives (strings, numbers...) are compared by their values.
string1 === string2; // true
string1 === string3; // true
string2 === string3; // true

string1 = "Goodbye";
string1 !== string3; // true
string1 !== string2; // true

string1; // "Goodbye"
string2; // "Hello"
string3; // "Hello"

let arr1 = ["Hello"];
let arr2 = ["Hello"];

arr1 !== arr2; // true

let arr3 = arr1;
arr1 === arr3; // true

arr1[0] = "Goodbye";

// arr3 = ["!!!"];

arr1.push({ foo: "bar" });
arr1 === arr3; // true

// .slice() performs a shallow copy
// arr1.slice();
// arr3.shift();

// let arr4 = [];
// arr1.forEach(function(el) {
//   arr4.push(el);
// });
// arr3 = arr4;
