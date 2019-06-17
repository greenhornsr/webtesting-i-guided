const calculator = require('./calculator')

describe('calculator.js', function(){
    //tests or nested describes go here.
    test('using test', () => {
        expect(true).toBeTruthy();
    });
    it('should add two numbers', () => {
        const expected = 4;
        const actual = calculator.add(2, 2);

        //assertion
        expect(actual).toBe(expected)
        // .toBe is a matcher method of expect.
        expect(calculator.add(2, 3)).toBe(5);
    });
    it('should return the value if only a single number', () => {
        expect(calculator.add(2)).toBe(2);
        expect(calculator.add(3)).toBe(3);
    });
    it('should return the sum of any given number of paramaters', () => {
        expect(calculator.add(1,2,3)).toBe(6);
        expect(calculator.add(1,0,3)).toBe(4);
        expect(calculator.add(1,0,3,1,2,4)).toBe(11);
        expect(calculator.add(1)).toBe(1);
        expect(calculator.add(1, -1)).toBe(0);
    })
    it('should return 0 if called with no arguments', () => {
        expect(calculator.add()).toBe(0);
    })
    it('should return sum of an array of numbers', () => {
        expect(calculator.add([1,2,3])).toBe(6);
    })
})

// first feature:  add two numbers
