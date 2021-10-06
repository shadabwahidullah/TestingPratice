const calculator = require('./calculator');

const cal = new calculator.Calculator();

describe ('adding tests', () => {
    test('returns', () => {
        expect(cal.add(10,12)).toBe(22);
    })
    test('returns', () => {
        expect(cal.add(15,12)).toBe(27);
    })
    test('returns', () => {
        expect(cal.add(-10,12)).toBe(2);
    })
});

describe ('subtraction tests', () => {
    test('returns', () => {
        expect(cal.subtract(10,12)).toBe(-2);
    })
    test('returns', () => {
        expect(cal.subtract(15,12)).toBe(3);
    })
    test('returns', () => {
        expect(cal.subtract(-10,12)).toBe(-22);
    })
});

describe ('division tests', () => {
    test('returns', () => {
        expect(cal.divide(12,10)).toBe(1.2);
    })
    test('returns', () => {
        expect(cal.divide(15,5)).toBe(3);
    })
    test('returns', () => {
        expect(cal.divide(-10,2)).toBe(-5);
    })
});

describe ('multiplication tests', () => {
    test('returns', () => {
        expect(cal.multiply(10,12)).toBe(120);
    })
    test('returns', () => {
        expect(cal.multiply(15,12)).toBe(180);
    })
    test('returns', () => {
        expect(cal.multiply(-10,12)).toBe(-120);
    })
});