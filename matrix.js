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


let mm = new Matrix([
    [10, 20, 30, 40],
    [1, 2, 3, 4]
])

let symbolMatrix2 = new Matrix([
    ["A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B"],
    ["C", "C", "C", "C", "C"]
])
console.log(mm)
console.log(mm.transpose())
console.log(symbolMatrix2)
console.log(symbolMatrix2.toNumber())