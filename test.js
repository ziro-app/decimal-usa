const test = require('ava')
const decimalUsa = require('./index')

test('Receive an integer', t => {
    const result = typeof decimalUsa(1)
    const expected = typeof 1
    console.log('Receive an integer')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive a float', t => {
    const result = decimalUsa(1.1) % 1 !== 0
    const expected = true
    console.log('Receive a float')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 1', t => {
    const result = decimalUsa(NaN)
    const expected = NaN
    console.log('Receive falsy 1')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 2', t => {
    const result = decimalUsa(undefined)
    const expected = NaN
    console.log('Receive falsy 2')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 3', t => {
    const result = decimalUsa(null)
    const expected = NaN
    console.log('Receive falsy 3')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 4', t => {
    const result = decimalUsa()
    const expected = NaN
    console.log('Receive falsy 4')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 5', t => {
    const result = decimalUsa('')
    const expected = NaN
    console.log('Receive falsy 5')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 6', t => {
    const result = decimalUsa(false)
    const expected = NaN
    console.log('Receive falsy 6')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive 0', t => {
    const result = decimalUsa(0)
    const expected = 0
    console.log('Receive 0')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string brazilian', t => {
    const result = decimalUsa('1,12')
    const expected = 1.12
    console.log('Receive string brazilian')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string usa', t => {
    const result = decimalUsa('1.1')
    const expected = 1.1
    console.log('Receive string usa')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 1', t => {
    const result = decimalUsa('string')
    const expected = NaN
    console.log('Receive string other')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 2', t => {
    const result = decimalUsa('string,1,1')
    const expected = NaN
    console.log('Receive string other 2')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 3', t => {
    const result = decimalUsa('1,1,1')
    const expected = NaN
    console.log('Receive string other 3')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive array', t => {
    const result = decimalUsa([])
    const expected = NaN
    console.log('Receive array')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive object', t => {
    const result = decimalUsa({})
    const expected = NaN
    console.log('Receive object')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive no argument', t => {
    const result = decimalUsa()
    const expected = NaN
    console.log('Receive object')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
