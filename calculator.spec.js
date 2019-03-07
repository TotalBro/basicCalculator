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
		s = calculator.multiply(-2,-3);
		expect(s).toEqual(6);
	});
});

describe('#divide', function() {
	it('divides numbers', function() {
		s = calculator.divide(4,2);
		expect(s).toEqual(2);
	});
	it('divides negative numbers', function() {
		s = calculator.divide(-4,-2);
		expect(s).toEqual(2);
	});
	it('rounds to two decimal places', function() {
		s = calculator.divide(5,6);
		expect(s).toEqual(0.83);
	});
	it('disallows divide by zero', function() {
		s = calculator.divide(4,0);
		expect(s).toEqual("Can't divide by zero!");	
	});
});

describe('#operate', function() {
	it('handles large strings', function() {
		s = calculator.operate('10+11+12+13');
		expect(s).toEqual(46);
	});
	it('accepts negative numbers', function() {
		s = calculator.operate('-4+3');
		expect(s).toEqual(-1);
	});
});