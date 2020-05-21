//11. covert letters to numbers using map
console.clear()

let symbolMatrix2 = [
    ["A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B"],
    ["C", "C", "C", "C", "C"]
];

function transpose(array) {

    let transposed = []
    for (let i = 0; i < array[0].length; i++) {
        transposed[i] = []
        for (let j = 0; j < array.length; j++) {
            transposed[i][j] = array[j][i]
        }
    }
    return transposed
}

function lettertoNumber(arr) {
    let map = new Map()

    map.set("A", 0)
    map.set("B", 1)
    map.set("C", 2)

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            for (let [k, v] of map.entries()) {
                if (arr[i][j] == k) {
                    arr[i][j] = v
                }
            }
        }

    }
    return arr
}


console.log(lettertoNumber(transpose(symbolMatrix2)))