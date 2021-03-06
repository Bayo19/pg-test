console.clear()
    // 14. Parse

let obj = `{"grid":[["L1","L1","L1","L1"],["L1","L1","L4","L4"],["L1","L1","L4","L4"],["L3","H1","H1","L2"],["H1","H1","H1","L4"]],"winningLines":[{"lineIndex":0,"symbol":"L1","matchCount":3,"line":[0,0,0,0,0],"win":4},{"lineIndex":1,"symbol":"L1","matchCount":3,"line":[1,1,1,1,1],"win":4},{"lineIndex":4,"symbol":"L1","matchCount":3,"line":[0,1,0,1,0],"win":4},{"lineIndex":7,"symbol":"L1","matchCount":3,"line":[1,0,1,0,1],"win":4},{"lineIndex":10,"symbol":"L1","matchCount":3,"line":[0,0,1,2,2],"win":4},{"lineIndex":14,"symbol":"L1","matchCount":3,"line":[1,0,0,0,1],"win":4},{"lineIndex":15,"symbol":"L1","matchCount":3,"line":[2,1,1,1,2],"win":4},{"lineIndex":17,"symbol":"L1","matchCount":3,"line":[0,1,1,1,0],"win":4}]}`


function parse(object) {
    let symbolMatrix = JSON.parse(object).grid.map(function(a) {

        return a.map(function(b) {
            if (b == 'L2' || b == 'H1') {
                return Number(b[1])
            } else if (b == 'L1' || b == 'L4' || b == 'L3') {
                return Number(b[1]) + 4
            }
        })
    })
    let lineWins = JSON.parse(object).winningLines.map(function(z) {
        if (z.symbol) {
            z.symbol = Number(z.symbol.split('')[1]) + 4
        }
        let lineSymbols = [5, 5, 5, -1, -1]
        let { lineIndex: id, win, symbol, matchCount: symbolCount, line: definition } = z
        let newobj = { id, win, symbol, symbolCount, definition, lineSymbols }
        return newobj
    })

    let newObj_Result = JSON.stringify({ symbolMatrix, lineWins })
    return newObj_Result
}

console.log(parse(obj))