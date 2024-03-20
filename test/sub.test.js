const sub  = require('../test/sub')
const mul = require('../test/mul')

test("Subtract Numebr" , () => {
    expect(sub(4,1)).toBe(3)
})

test('multiplyNumber', () =>{
    expect(mul(5,2)).toBe(10)
})
