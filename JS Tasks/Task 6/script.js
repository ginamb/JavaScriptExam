/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

//GAM 05 17 ir 05.23/24


//naujas masyvas
// const newUsers = users.map(function (){
//   return
// })

// function getUserAverageAge() {
//   for (i = 0; i < users.length; i++) {
//     let score = 0;
//     score += users.length;
//   }
//   let avg = score / users.length;
// }

// const amzius = Object.values(users);

// let total = 0;
// for (let r of amzius) {
//   total = total + r;
//   total += r;
// }

// let average = total / amzius.length
// console.log(average)

//KLAIDA SU .JOIN???
// function getUserAverageAge(users){
//   return(new Function(`return ${users.map(({age})=>age).join("+")}`()))/users.length;
// }
// console.log(getUserAverageAge(users));



//NEGERAI SKAIČIUOJA
// function getUserAverageAge() {
//   let sum = 0;
//   for (let i = 0; i < users.length; i++) {
//     sum =+ users[i].age;
//   }
//   let avg = sum / users.length;
//     return avg;
// }

//SPRENDIMAS VEIKIA, BET NE FUNKCIJA
const average = users.reduce((total,next)=> total+ next.age,0)/users.length;
console.log(average);

// const vidurkis = Object.values(users)
// let total = 0;

// function getUserAverageAge() {
//   for (a of vidurkis) {
//     total = total + a;
//   }
// }

// let average = total/users.length
// console.log(average);