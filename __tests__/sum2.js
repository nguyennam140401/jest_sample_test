const sum = require('../sum')

var arr = [
    { match: 8, english: 10, sum: 18 },
    { match: 8, english: 10, sum: 18 },
    { match: 8, english: 10, sum: 19 },
    { match: 8, english: 10, sum: 20 },
    { match: 8, english: 10, sum: 18 },
]
arr.forEach((x) => {
    test('adds two number', () => {
        expect(sum(x.match, x.english)).toBe(x.sum)
    })
})
