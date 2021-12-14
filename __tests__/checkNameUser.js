const { array } = require('yargs')
const { user } = require('../initData/person')

user.forEach((x) => {
    test(`Check user id: ${x.id}`, () => {
        expect(x.username).toMatch(/B/)
    })
})
