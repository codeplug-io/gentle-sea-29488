// import "babel-polyfill";
// // //A REFRESHER ON ES6
// //
// // //understanding let and const
// // let myName = "max";
// // console.log(myName);
// //
// // myName = "godwin";
// // console.log(myName);
// //
// // //but for const
// // const myNam = "max";
// // console.log(myNam);
// //
// // myNam = "myNam"; // throws an error
// // console.log(myNam);
// //
// // //FUNCTIONS
// // function printMyName(name, age) {
// //   console.log(name + " " + age);
// // }
// // // printMyName("godwin", 23);
// // //
// // const printMyName2 = (name, age) => {
// //   console.log(name + " " + age);
// // };
// // printMyName2("godwin", 23);
// //
// // const multiply = number => number * 2;
// // console.log(multiply(4));
//
// //Exports and Imports
//
// // export default person; can only be imported as --> import prs from './src/Person.js'
//
// //export const a = () => return 1 + 1;  export const b = () => return 1 + 1; in one file can be imported as
// //import { a } from './src/Person.js' or import { a, b} from './src/Person.js'
//
// //CLASSES
// // class Human {
// //   constructor() {
// //     this.gender = "male";
// //   }
// //   printGender() {
// //     console.log(this.gender);
// //   }
// // }
// //
// // class Person extends Human {
// //   constructor() {
// //     super();
// //     this.name = "max";
// //     this.gender = "female";
// //   }
// //
// //   printMyName() {
// //     console.log(this.name);
// //   }
// // }
// //
// // const person = new Person();
// // person.printMyName();
// // person.printGender();
//
// ////////////////////////
// //Properties And Methods //error with babel
// // class Human {
// //   gender = "male";
// //   printGender = () => {
// //     console.log(this.gender);
// //   };
// // }
// //
// // class Person extends Human {
// //   name = "max";
// //   gender = "female";
// //
// //   printMyName = () => {
// //     console.log(this.name);
// //   };
// // }
// //
// // const person = new Person();
// // person.printMyName();
// // person.printGender();
//
// //
// //////
// //The Spread and Rest operator
// //...
//
// // spread array
// // const numb = [1, 2, 3];
// // const newNumb = [...numb, 4, 5];
// // console.log(newNumb);
//
// //spread object //error with babel
// // const person = {
// //   name: "max"
// // };
// // const newPerson = {
// //   ...person,
// //   age: 23
// // };
// // console.log(newPerson);
// /////
// //rest operator
// // const filter = (...arg) => {
// //   return arg.filter(el => el === 1);
// // };
// //
// // console.log(filter(1, 2, 3));
//
// /////////////
// //DESTRUCTURING
//
// // const numb = [1, 2, 3, 4];
// // [num1, , num3] = numb; //babel error num1 not defined
// // console.log(num1, num2);
//
// /////
// //PREMITIVE TYPES REFRESHER
// //numbers, boolean, strings,
// //can be copied from another variable, and changes to that varieble doesnt
// //affect the copy.
// // let a = 2;
// // let b = a;
// // a = 3;
// // console.log(b); //QED
//
// //REFERENCE TYPES
//
// //object, arrays are referenced when they are assigned to another variable
// //if you change the object anywhere in an application the variable changes to reflect the new value
// //of the object or array.
// // const person = {
// //   name: "max"
// // };
// //
// // const secondPerson = person;
// // person.name = "godwin";
// //
// // console.log(secondPerson);
//
// //but you can use destructuring to copy the contents of an object or array out, so that the new copy
// //doesnt change when we reassign a new value to the object or array.
//
// // const person = {
// //   name: "max"
// // };
// //
// // const secondPerson = {
// //   ...person
// // };
// // person.name = "godwin";
// //
// // console.log(secondPerson);
//
// ////
// //REFRESHING ARRAY FUNCTIONS
// // const num = [1, 2, 3, 4]; //still remains in its memory
// //
// // const doubleNumArr = num.map(num => {
// //   return num * 2;
// // }); //stored in a double memory
// //
// // console.log(doubleNumArr);
// // console.log(num);
// const func = () => {
//   let
//   let arr = () => {
//     return [
//       { id: i + 1, name: "nameEre", last: "lastERe" },
//       { id: i + 1, name: "nameEre", last: "lastERe" },
//       { id: i + 1, name: "nameEre", last: "lastERe" },
//       { id: i + 1, name: "nameEre", last: "lastERe" }
//     ];
//   };
//   let mapArr = arr();
//
//   // mapArr = arr.map((item, i) => {
//   //   return item;
//   // });
//   index = mapArr.map((item, i) => {
//     return i;
//   });
//   console.log(mapArr);
//
//   mapArr.splice(index, 1);
// };
// func();
