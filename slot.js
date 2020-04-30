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



console.clear()


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