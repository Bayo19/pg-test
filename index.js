// 1. === test for strict equality, meaning that value AND the type are the same
// so for example 5 === 5 but 5!== '5'

// whereas == just checks that the values are the same so for example '5' == 5



//2. undefined is a variable that's been declared that has no value
// a function returnes undefined if a value wasn't returned

// null is the absence of a value


//3. 4 + 8 + '9' = 129 because adding a string to number just concatenates the string to the number but
// adding the 4 and 8 equals 12 so we concatenate 9 the string to 12, the result of 4 and 8, resulting in 129 which is a string. Adding a string to a number concatenates them and the final result has a type of string

//4. the five JS data types are string, number, boolean, null and undefined

//5. we can create new object using object literals and assign a property using dot notation or bracket in which the property name will be a string
// we can also use Object.create to create a new Object
// we can make a new object by inheriting from a constructor, this would be an instance of the constructor object. We would use the 'new' keyword e.g. const DMX =  new Object()

//6.
// function logMessage() {

//     console.log(message)
// }

// logMessage('hello world')

// There will be a reference effor as message is not defined as a parameter in the logMessage function of a variable in the function

//7. 
let s = ["a", 2, { "C": 1 }].filter(function(element) { return element = "a" })

//the error is the single = which would assign instead of execute a logical operation



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
//the variables inside the object in the positions.push, are not referrencing the symbolMatrix array

// 10. convert 3x5 matrix to 5x3 (transpose)
console.clear()

let symbolMatrix2 = [
    ["A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B"],
    ["C", "C", "C", "C", "C"]
];


let transpose = function(arr) {

    let transposed = []
    for (let i = 0; i < arr[0].length; i++) {
        transposed[i] = []
        for (let j = 0; j < arr.length; j++) {
            transposed[i][j] = arr[j][i]
        }
    }
    return transposed
}


//11. covert letters to numbers using map

let flatten = function(arr) {
    let flatMap = []
    arr.forEach(function(value) {
        if (Array.isArray(value)) {
            flatMap = flatMap.concat(flatten(value))
        } else {
            flatMap.push(value)
        }
    })
    return flatMap
}


let length = function(x) {
    return x.length
}

let toMap = function(arr) {
    let q = new Map()

    for (i = 0; i < length(flatten(arr)); i++) {
        q.set(arr[i] + i, i)
    }
    return q
}

let toNumbers = function(map) {
    let result = map.values()
    return result
}

console.log(toNumbers(toMap(flatten(transpose(symbolMatrix2)))))
console.log(transpose(symbolMatrix2))

// 12. Matching values
let slot = [
    [Math.floor(Math.random() * 5)],
    [Math.floor(Math.random() * 5)],
    [Math.floor(Math.random() * 5)],
    [Math.floor(Math.random() * 5)],
    [Math.floor(Math.random() * 5)]
]

function slotChecker(arr) {
    let x = arr
    let find = arr[0][0]
    let counter = 0
    for (let i = 0; i < x.length; i++) {
        if (String(x[i]) === String(find)) {
            counter++
        } else {
            break
        }
    }
    return counter
}
console.log(slot)
console.log(slotChecker(slot))

// 13. Random Matrix

function randomMatrix() {
    let row = 5
    let column = 4

    return Array.from({ length: `${row}` }, function() {
        return Array.from({ length: `${column}` }, function() {
            return Math.floor(Math.random() * 11)
        })
    })
}
console.clear()
console.log(randomMatrix())

// 15 
class Matrix {
    constructor(ary) {
        this.mtx = ary
        this.height = ary.length
        this.width = ary[0].length
    }


    transpose() {
        let transposed = []
        for (let i = 0; i < this.width; i++) {
            transposed[i] = []
            for (let j = 0; j < this.height; j++) {
                transposed[i][j] = this.mtx[j][i]
            }
        }
        return new Matrix(transposed)
    }
    toNumber() {
        return this.transpose().mtx.map(function mapper(a, i) {
            if (Array.isArray(a)) {
                return a.map(mapper)
            } else {
                return i
            }
        })
    }
}