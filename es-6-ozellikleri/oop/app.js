// Global Scope

// const emp1 = {
//     name: 'John',
//     age: 30,
// };
// const emp2 = {
//     name: 'Jane',
//     age: 25,
// };

// emp1.salary = 1000;

// console.log(emp1);

// Yapıcı Fonksiyon

// function Employee (name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfos = function () {
//         console.log(`${this.name} is ${this.age} years old and earns ${this.salary}`);
//     }
// }

// // const emp1 = new Employee();
// // const emp2 = new Employee();

// // console.log(emp1);

// const emp1 = new Employee('John', 30, 1000);
// const emp2 = new Employee('Jane', 25, 2000);
// const emp3 = new Employee('Mike', 20, 3000);

// console.log(emp1);
// console.log(emp2);
// console.log(emp3);

// emp1.showInfos();
// emp2.showInfos();
// emp3.showInfos();


// Prototypal Inheritance

// function Employee (name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfos = function () {
//         console.log(`${this.name} is ${this.age} years old and earns ${this.salary}`);
//     }
//     this.toString = function () {
//         console.log("Bu bir toString fonksiyonu");
//     }
// }

// const emp1 = new Employee('John', 30, 1000);
// const emp2 = new Employee('Jane', 25, 2000);

// console.log(emp1);
// console.log(emp2);
// emp1.showInfos();

// emp1.toString();
// consoel.log(emp1.toString());


// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// };

// Employee.prototype.showInfos = function () {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }

// const emp1 = new Employee('John', 30, 1000);
// const emp2 = new Employee('Jane', 25, 2000);

// console.log(emp1);
// console.log(emp2);

// emp1.showInfos();

// Object Create

// const person = {
//     test:function () {
//         console.log("Bu bir test fonksiyonu");
//     },
//     test2:function () {
//         console.log("Bu bir test2 fonksiyonu");
//     }
// };
// console.log(person);

// const person2 = Object.create(person);
// person2.name = "John";
// person2.age = 30;
// person2.salary = 1000;
// console.log(person2);

// function Person(){

// }
// Person.prototype.test1 = function () {
//     console.log("Bu bir test1 fonksiyonu");
// }
// Person.prototype.test2 = function () {
//     console.log("Bu bir test2 fonksiyonu");
// }

// function Employee(name, age, salary) {
//     Person.call(this);
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);

// const emp1 = new Employee('John', 30, 1000);
// const emp2 = new Employee('Jane', 25, 2000);

// emp1.test1();
// emp1.test2();

// console.log(emp1);


// Function Prototype - Call, Apply, Bind

// const obj1 = {
//     num1: 10,
//     num2: 20,
// }

// const obj2 = {
//     num1: 30,
//     num2: 40,
// }

// function addNumbers(a, b) {
//     console.log(this.num1)
//     console.log(this)
//     console.log(this.num1 + this.num2 + a + b);
// }
// addNumbers.call(obj1, 100, 200);
// addNumbers.call(obj2, 100, 200);

// addNumbers.apply(obj1, [100, 200]);
// addNumbers.apply(obj2, [100, 200]);


// bind

// function getNumbersTotal(a, b) {
//     return this.num1 + this.num2 + a + b;
// }
// const copyFunction = getNumbersTotal.bind(obj1, 100, 200);
// const copyFunction2 = getNumbersTotal.bind(obj2, 100, 200);
// console.log(copyFunction());
// console.log(copyFunction2());

// console.log(copyFunction(100, 200));
// console.log(copyFunction2(100, 200));


// Prototype - Inheritance

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function () {
//     console.log("İsim: " + this.name + " Yaş: " + this.age);
// }

// const person = new Person('John', 30);
// console.log(person);

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("Bu bir toString fonksiyonu");
// }
// //Overriding
// Employee.prototype.showInfos = function () {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }
// const emp = new Employee('John', 30, 1000);
// console.log(emp);
// emp.showInfos();
// emp.toString();


// ES6 Classes

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function () {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }

// const emp = new Employee('John', 30, 1000);
// console.log(emp);

// class Employee {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }

//     showInfos() {
//         console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
//     }
// }

// const emp = new Employee('John', 30, 1000);
// console.log(emp);
// emp.showInfos();


// class Matematik {
//     square(x) {
//         return x * x;
//     }
//     static cube (x) {
//         return x * x * x;
//     }
// }

// const matematik = new Matematik();
// console.log(matematik.square(5));
// console.log(Matematik.cube(5));

// console.log(Matematik.cube(3));

// ES6 Kalıtım

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    showInfos() {
        super.showInfos();
        console.log("İsim: " + this.name + " Yaş: " + this.age,"Maaş: " + this.salary);
    }
}

const emp = new Employee('John', 30, 1000);
console.log(emp);
emp.showInfos();