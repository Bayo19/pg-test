let loop = (max) => {
    (fn) => {
        for (let i = 0; i < max; i++) {
            fn(i)
        }
    }
};

let transformers = (l) => {
    let rows = l.length
    let columns = l[0].length
    let new_matrix = Array(columns).fill(rows)
    loop(rows)(function(row) {
        loop(columns)(function(column) {
            new_matrix[column][row] = l[row][column]
        })
    });
    return new_matrix
}

console.clear()

var someNumbers = [1, 2, 3, 4, 5];
console.log(someNumbers.length)
var count = 0;
for (var i = 0; i <= someNumbers.length; ++i) {
    count += someNumbers[i];
}
console.log("Total : " + count);

// count variable was never declared