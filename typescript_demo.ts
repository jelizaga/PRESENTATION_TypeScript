////////////////////////////////////////////////////////////////////////////////
// TYPESCRIPT //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 1 Addition //////////////////////////////////////////////////////////////////

const jsAdditionTS = (numA, numB) => {
  return numA + numB;
}

let numberX = 2;
numberX = "ABC"; // ⚠️
console.log(jsAdditionTS(numberX, 5)); // → ABC

// 2 Fixing addition function //////////////////////////////////////////////////

// // TYPESCRIPT SYNTAX - `variableName:type` - Declares expected parameter type.
// const tsAdditionTS = (numA:number, numB:number) => {
//   return numA + numB;
// }

// let numberY = "ABC"; // ← Change to a number to remove error below.
// console.log(tsAdditionTS(numberY, 5)); // ⚠️ String cannot be assigned to number.

// 3 Interfaces & objects //////////////////////////////////////////////////////

// // TYPESCRIPT SYNTAX: `interface variableName` - Declares a data interface with
// //                    static properties & types.
// interface Car {
//   year: number; // ← Change to `any` to allow any type.
//   make: string;
//   model: string;
//   hp: number;
// }

// // TYPESCRIPT SYNTAX: `variableName:type` - Declares variable's type.
// const toyotaCorolla:Car = {
//   year: 2010,
//   make: "Toyota",
//   model: "Corolla",
//   hp: 132
// }

// toyotaCorolla.drive = "FWD"; // ⚠️ `drive` doesn't exist & can't be added.
// toyotaCorolla.year = "twenty-ten"; // ⚠️ String cannot be assigned to number.
// toyotaCorolla.hp = 200; // 👍

// // TYPESCRIPT SYNTAX: `variableName:type` - Uses our Car interface type.
// const makeCarFlyTS = (car:Car) => {
//   return `My ${car.year} ${car.make} ${car.model} is flying!! 🚗`;
// }
// console.log(makeCarFlyTS(toyotaCorolla));

// 4 Unions ////////////////////////////////////////////////////////////////////

// // TYPESCRIPT SYNTAX: `type TypeName =` - Assigns what values a type can be.
// type DiceTS = "⚀" | "⚁" | "⚂" | "⚃" | "⚄" | "⚅";
// type DoorTS = "open" | "closed";

// let frontDoor:DoorTS = "open"; // 👍
// frontDoor = "ajar"; // ⚠️ Type `ajar` is not assignable to `DoorTS`.
// let diceRoll:DiceTS = 4; // ⚠️ Type `4` is not assignable to `DiceTS`.
// diceRoll = "⚃"; // 👍