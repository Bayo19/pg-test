console.clear()
    // 13. Random Matrix input

function randomMatrix(x, y) {
    let row = x
    let column = y

    return Array.from({ length: `${row}` }, function() {
        return Array.from({ length: `${column}` }, function() {
            return Math.floor(Math.random() * 11)
        })
    })
}

console.log(randomMatrix(5, 4))