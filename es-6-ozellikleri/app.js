// const merhaba = function () {
//     console.log("Merhaba");
// }
// merhaba(); // Merhaba Normal Function



// const merhaba = () => {
//     console.log("Merhaba");
// }
// merhaba(); // Merhaba Arrow Function


// const merhaba = (firstName, lastName) => {
//     console.log("Merhaba", firstName, lastName);
// }
// merhaba("Volkan", "Çalışkan"); // Merhaba Volkan


// const merhaba = (firstName, lastName) => console.log("Merhaba", firstName, lastName);

// const cube = function (x) {
//     return x * x * x;
// }
// console.log(cube(4)); // 64 // Normal Function

// const cube = x => x * x * x;
// console.log(cube(4)); // 64 // Arrow Function


// Destructing

// let number1, number2;
// arr = [100, 200, 300];
// // number1 = arr[0];
// // number2 = arr[1];
// // console.log(number1, number2); // 100 200

// [number1, number2] = arr;
// console.log(number1, number2); // 100 200

// Object Destructing

// const person = {
//     firstName: "Volkan",
//     lastName: "Çalışkan",
//     age: 30,
//     address: {
//         city: "İstanbul",
//         country: "Türkiye"
//     }
// }

// const { firstName, lastName, age, address: { city, country } } = person;
// console.log(firstName, lastName, age, city, country); // Volkan Çalışkan 30 İstanbul Türkiye

// Function Destructing

// const getLanguage = () => ["JavaScript", "Java", "Python"];
// const [language1, language2, language3] = getLanguage();
// console.log(language1, language2, language3); // JavaScript Java Python

// Obje

// const person = {
//     firstName: "Volkan",
//     lastName: "Çalışkan",
//     age: 30,
//     salary: 1000,
//     showInfos: () => console.log("Bilgiler Gösteriliyor...")
// }

// const { firstName: ad, lastName: soyad, age:yas, salary: maas, showInfos:bilgileriGoster } = person;
// console.log(ad, soyad, yas, maas); // Volkan Çalışkan 30 1000
// bilgileriGoster(); // Bilgiler Gösteriliyor...

// Spread Operator

// const langs = ["JavaScript", "Java", "Python"];
// console.log(...langs); // JavaScript Java Python

// const langs2 = ["C#", "C++", "C"];
// console.log(...langs, ...langs2); // JavaScript Java Python C# C++ C

// const addNumbers = (a, b, c) => a + b + c;
// const numbers = [1, 2, 3];
// console.log(addNumbers(...numbers)); // 6

// For in - For of

const person = {
    firstName: "Volkan",
    lastName: "Çalışkan",
    age: 30,
    salary: 1000,
};

const languages = ["JavaScript", "Java", "Python"];
const name = "Volkan";

// For in
// for (let prop in person){
//     console.log(prop,":", person[prop]);
// }

// for (let index in languages){
//     console.log(index, ":", languages[index]);
// }

// for (let index in name){
//     console.log(index, ":", name[index]);
// }

// for of

// for(let value of person){ // Error
//     console.log(value);
// }

// for (let value of languages){
//     console.log(value);
// }

// for (let chracter of name){
//     console.log(chracter);
// }


// Map

// let myMap = new Map();
// myMap.set(myMap);

// const key1 = "Volkan";
// const key2 = {a:10, b:20};
// const key3 = () => 2;

// Set
// myMap.set(key1, "String");
// myMap.set(key2, "Object");
// myMap.set(key3, "Function");

// Get
// console.log(myMap.get(key1)); // String
// console.log(myMap.get(key2)); // Object
// console.log(myMap.get(key3)); // Function
// console.log(myMap);
// console.log(myMap.size); // 3

// const cities = new Map();
// cities.set("İstanbul", "Türkiye");
// cities.set("Ankara", "Türkiye");
// cities.set("İzmir", "Türkiye");
// cities.set("Samsun", "Türkiye");

// For Each
// cities.forEach(function(value, key){
//     console.log(key, ":", value);
// });

// For of

// for (let [key,value] of cities){
//     console.log(key, value);
// }