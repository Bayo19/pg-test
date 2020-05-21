console.clear()
    // 10. convert 3x5 matrix to 5x3 (transpose)

let symbolMatrix2 = [
    ["A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B"],
    ["C", "C", "C", "C", "C"]
];


export function transpose(array) {

    let transposed = []
    for (let i = 0; i < array[0].length; i++) {
        transposed[i] = []
        for (let j = 0; j < array.length; j++) {
            transposed[i][j] = array[j][i]
        }
    }
    return transposed
}

console.log(transpose(symbolMatrix2))