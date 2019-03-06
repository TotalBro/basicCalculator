const calculator = require('./calculator')

describe('#add', function() {
	it('adds two numbers', function() {
		s = calculator.add(2,3);
		expect(s).toEqual(5);
	});
	it('adds two negative numbers', function() {
		s = calculator.add(-2,-3);
		expect(s).toEqual(-5);
	});
});

describe('#subtract', function() {
	it('subtracts numbers', function() {
		s = calculator.subtract(2,3);
		expect(s).toEqual(-1);
	});
	it('subtracts negative numbers', function() {
		s = calculator.subtract(-2,-3);
		expect(s).toEqual(1);
	});
});

describe('#multiply', function() {
	it('multiplies numbers', function() {
		s = calculator.multiply(2,3);
		expect(s).toEqual(6);
	});
	it('multiplies negative numbers', function() {
		s = calculator.subtract(-2,-3);
		expect(s).toEqual(6);
	});
});

describe('#divide', function() {
	xit('divides numbers', function() {
		s = calculator.divide(4,2);
		expect(s).toEqual(2);
	});
	xit('divides negative numbers', function() {
		s = calculator.divide(-4,-2);
		expect(s).toEqual(2);
	});
	xit('rounds to two decimal places', function() {
		s = calculator.divide(3,4);
		expect(s).toEqual(0.75);
	});
	xit('disallows divide by zero', function() {
		s = calculator.divide(4,0);
		expect(s).toEqual("Can't divide by zero!");	
	});
});
