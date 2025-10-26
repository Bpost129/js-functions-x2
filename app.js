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

// function getRandomInt(min, max) {
//   console.log(Math.floor(Math.random() * (max - min + 1) + min))
// }

// getRandomInt(1, 10)

// function getPointsScored(...times) {
//   let totalPoints = 0
//   times.forEach(function(time) {
//     if (time < 30) {
//       totalPoints += 100
//     } else if (time < 60) {
//       totalPoints += 75
//     } else {
//       totalPoints += 25
//     }
//   })
//   return totalPoints
// }
	
// const points = getPointsScored(16, 99, 32, 60)
// console.log(points)

// function computeArea(width, height) {
//   return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units`
// }

// let area = computeArea(3, 6);
// console.log(area)


// let planetHasWater = function(planet) {
//   if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
//     return true
//   } else {
//     return false
//   }
// }

// let earth = planetHasWater('EaRtH')
// console.log(earth)

// function isMultipleOfTen(number){
//   return number % 10 === 0
// }

// for(let i = 1; i <= 20; i++){
//   console.log( isMultipleOfTen(i), i )
// }


//immediately invoked function expression (IIFE)
// (function(){
//   console.log('This function runs right away!')
// })()


//nested function example
// const title = 'This is the title of my cool book'

// function toTitleCase(string){
//   function capitalize(word){
//     return word.slice(0,1).toUpperCase() + word.slice(1)
//   }

//   let strArr = string.split(' ')
//   strArr.forEach((el, i) => strArr[i] = capitalize(el))
//   return strArr.join(' ')
// }

// toTitleCase(title) // This Is The Title Of My Cool Book



// const add = (x, y) => x + y

// let sum = add(12, 3)

// console.log(sum)


//to implicitly return objects, wrap in parentheses ()
// let todos = ['Buy milk', 'Mow lawn']

// let todoObjects = todos.map(todo => ({todo: todo, done: false}))

// console.log(todoObjects)

//object methods written as arrow functions cannot access that object's properties
//aka. no arrow functions within objects