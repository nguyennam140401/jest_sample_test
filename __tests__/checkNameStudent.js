const checkNameUser = require('../function/checkNameUser')
const students = require('../initData/student')

students.map((student) => {
    test(`check name student :  ${student.id}`, () => {
        expect(checkNameUser(student.name)).toBeTruthy()
    })
})
