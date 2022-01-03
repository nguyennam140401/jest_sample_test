const students = require('../initData/student')

students.map((student) => {
    test(`check point student :  ${student.id}`, () => {
        expect(student.point).toBeGreaterThanOrEqual(18)
    })
})
