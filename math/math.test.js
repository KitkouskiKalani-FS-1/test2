const {add,subtract,multiply,divide,squareRoot,max} = require('./math')


describe("Testing the string module", ()=>{
    
   test("Should add 2 numbers", ()=>{
        expect(add(13,2)).toBe(15);
    })

    test("Should subtract 2 numbers", ()=>{
        expect(subtract(11,4)).toBe(7);
    })

    test("Should multiply 2 numbers", ()=>{
        expect(multiply(4,5)).toBe(20);
    })

    test("Should subtract 2 numbers", ()=>{
        expect(divide(12,3)).toBe(4);
    })

    test("Should retrieve squareroot of a number", ()=>{
        expect(squareRoot(25)).toBe(5);
    })

    test("Should return largers number between 3 numbers", ()=>{
        expect(max(12,31,5)).toBe(31);
    })
})