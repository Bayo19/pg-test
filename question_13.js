console.clear()
    // 13. Random Matrix input

function randomMatrix(x, y) {
    return Array.from({ length: x }, function() {
        return Array.from({ length: y }, function() {
            return Math.floor(Math.random() * 11)
        })
    })
}

console.log(randomMatrix(5, 4))