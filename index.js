const ExcelJS = require('exceljs')

// const workbook = new ExcelJS.Workbook();

// workbook.creator = 'Nguyen Van Nam';
// workbook.lastModifiedBy = 'Nam';
// workbook.created = new Date(2021, 12, 10);
// workbook.modified = new Date();
// workbook.lastPrinted = new Date(2016, 9, 27);

// workbook.properties.date1904 = true;

// workbook.calcProperties.fullCalcOnLoad = true;

// workbook.views = [
//     {
//       x: 0, y: 0, width: 10000, height: 20000,
//       firstSheet: 0, activeTab: 1, visibility: 'visible'
//     }
// ]

// const sheet = workbook.addWorksheet('My Sheet');
const workbook = new ExcelJS.Workbook()
workbook.views = [
    {
        x: 0,
        y: 0,
        width: 5,
        height: 5,
        firstSheet: 0,
        activeTab: 1,
        visibility: 'visible',
    },
]
var table
workbook.xlsx.readFile('a.xlsx').then((data) => {
    table = data.getWorksheet().getSheetValues()
    var obj
    for (let i = 2; i < table.length; i++) {
        for (let j = 1; j < table[1].length; j++) {
            console.log(table[1][j], table[i][j])
            obj[table[1][j]] = table[i][j]
        }
    }
    console.log(obj)
})

// const workbook = createAndFillWorkbook()
// await workbook.xlsx.writeFile('test')
