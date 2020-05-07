// 1. === test for strict equality, meaning that value AND the type are the same
// so for example 5 === 5 but 5!== '5'

// whereas == just checks that the values are the same so for example '5' == 5



//2. undefined is a variable that's been declared that has no value
// a function returnes undefined if a value wasn't returned

// null is the absence of a value


//3. 4 + 8 + '9' = 129 because adding a string to number just concatenates the string to the number but
// adding the 4 and 8 equals 12 so we concatenate 9 the string to 12, the result of 4 and 8, resulting in 129 which is a string. Adding a string to a number concatenates them and the final result has a type of string

//4. the five JS data types are string, number, boolean, null and undefined

//5. we can create new object using object literals and assign a property using dot notation or bracket in which the property name will be a string. We can add methods
// we can also use Object.create to create a new Object
// we can make a new object by inheriting from a constructor function. The object would be an instance of the constructor. We would use the 'new' keyword e.g.
/* 
function Person(name, dob, job){
    this.name = name
    this.dob = dob
    this.job = job
}
const Josh =  new Person('Joshua', 1956, 'Baker) 

*/

//6.
// function logMessage() {

//     console.log(message)
// }

// logMessage('hello world')

// There will be a reference error as message is not defined as a parameter in the logMessage function or as a variable in the function

//7. 
let s = ["a", 2, { "C": 1 }].filter(function(element) { return element = "a" })

// the error is the single equals sign (=) which would assign a value to a variable instead of executing a logical operation



//8.

// var someNumbers = [1, 2, 3, 4, 5];
// var total = 0;
// for (var i = 0; i <= someNumbers.length; ++i) {
//     count += someNumbers[i];
// }
// console.log("Total : " + count);

// count variable was never declared
// total is declared but not read
// using <= return NaN. instead it should be i < someNumbers.length 

// 9.
// var symbolMatrix = [
//         [1, 1, 1],
//         [2, 2, 2],
//         [3, 3, 3],
//         [4, 4, 4, [5, 5, 5]];
//         var targetSymbol = 3;
//         var positions;
//         for (var i = 0; i < symbolMatrix.length; i++) {
//             for (var j = 0; j < symbolMatrix[i].length; i++) {
//                 if (symbolMatrix[i][j] == targetSymbol) {
//                     positions.push({ x: i, y: j });
//                 }
//             }
//         }
//         console.log("Positions : " + positions);

// first error is lack of closing backet on the forth element of the symbolMatrix
// i++ instead of j++ in the inner for loop
// positions has no value so we can't push into it as it's not an array
//the variables inside the object in the positions.push, are not referencing the symbolMatrix array