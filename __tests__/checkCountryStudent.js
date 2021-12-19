const students = require('../initData/student')

students.map((student) => {
    test(`check age student :  ${student.id}`, () => {
        expect(student.country).toMatch(/Viet Nam/)
    })
})
