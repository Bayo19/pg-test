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