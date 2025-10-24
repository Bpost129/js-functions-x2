// function getPointsScored(elapsedTime) {
//   if (elapsedTime < 30) {
//     return 100
//   } else if (elapsedTime < 60) {
//     return 75
//   } else {
//     return 25
//   }
// }

// const points = getPointsScored(61)

// console.log(points)



//function declaration
//hoisted - can be called before it is defined
// function sayHello(name) {
//   console.log(`Hello ${name}!`)
// }

//function expression
//cannnot be called before it is defined
// let sayHello = function(name) {
//   console.log(`Hello ${name}!`)
// }

//arrow function
// let sayHello = (name) => {
//   console.log(`Hello ${name}!`)
// }

// sayHello('Alice')

function getRandomInt(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min))
}

getRandomInt(1, 10)