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

console.clear();

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
