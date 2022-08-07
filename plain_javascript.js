////////////////////////////////////////////////////////////////////////////////
// PLAIN JAVASCRIPT ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 1 Addition //////////////////////////////////////////////////////////////////

const jsAdditionJS = (numA, numB) => {
  return numA + numB;
}

let numberA = 2;
numberA = "ABC";
console.log(jsAdditionJS(numberA, 5)); // → ABC5

// 2 Fixing addition function //////////////////////////////////////////////////

// const jsAdditionFixedJS = (numA, numB) => {
//   if (typeof numA !== "number" || typeof numB !== "number") {
//     return Error("numA & numB must be numbers.");
//   } else {
//     return numA + numB;
//   }
// }

// let numberC = "ABC";
// console.log(jsAdditionFixedJS(numberC, 5)); // → Error: numA & numB must be numbers.

// 3 Objects ///////////////////////////////////////////////////////////////////

// const hondaCivic = {
//   year: 2010,
//   make: "Honda",
//   model: "Civic",
//   hp: 140
// };

// hondaCivic.drive = "FWD"; // 👍
// hondaCivic.year = "twenty-ten"; // 👍
// toyotaCorolla.hp = 200; // 👍

// const makeCarFlyJS = (car) => {
//   return `My ${car.year} ${car.make} ${car.model} is flying!! 🚗`;
// }
// console.log(makeCarFlyJS(hondaCivic));

// 4 Without Unions ////////////////////////////////////////////////////////////

// class DiceJS {
//   constructor(face) {
//     if (face !== "⚀" || face !== "⚁" || face !== "⚂" || face !== "⚃" || 
//       face !== "⚄" || face !== "⚅") {
//         return Error("face must be a valid dice face.");
//     } else {
//       this.face = face;
//     }
//   }
// }

// class DoorJS {
//   constructor(status) {
//     if (status !== "open" || status !== "closed") {
//       return Error("status must be `open` or `closed`.");
//     } else {
//       this.status = status;
//     }
//   }
// }