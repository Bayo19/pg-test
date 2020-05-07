console.clear()

// 12. Matching values
let slot = Array.from({ length: 5 }, function() {
    return Array.from({ length: 4 }, function() {
        return Math.floor(Math.random() * 11)
    })
})


function slotChecker(array) {
    if (!Array.isArray(array[0])) {
        let counter = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[0]) {
                counter++
            } else {
                break
            }
        }
        return { array, counter }
    }

    let result = array.map(function(arr) {
        let counter = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[0]) {
                counter++
            } else {
                break
            }
        }
        return { arr, counter }
    })
    return result

}

console.log(slotChecker(slot))