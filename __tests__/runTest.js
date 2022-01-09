const ExcelJS = require('exceljs')
const workbook = new ExcelJS.Workbook()
var table
var arr = []

let container

beforeEach(() => {
    workbook.xlsx.readFile('a.xlsx').then((data) => {
        table = data.getWorksheet().getSheetValues()
        for (let i = 2; i < table.length; i++) {
            for (let j = 1; j < table[1].length; j++) {
                var obj
                obj = { ...obj, [table[1][j]]: table[i][j] }
            }
            arr.push(obj)
        }
        console.log(arr)
    })
})

afterEach(() => {
    console.log('done')
})

test('sum ', () => {
    expect(4).toBe(4)
})
