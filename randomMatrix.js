function randomMatrix() {
    let row = Math.floor(Math.random() * (7 - 4) + 4)
    let column = Math.floor(Math.random() * (6 - 3) + 3)

    return Array.from({ length: `${row}` }, function() {
        return Array.from({ length: `${column}` }, function() {
            return Math.floor(Math.random() * 11)
        })
    })
}
console.clear()
console.log(randomMatrix())