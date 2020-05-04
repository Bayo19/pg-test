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