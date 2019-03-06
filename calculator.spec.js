const calculator = require('./calculator')

describe('#add', function() {
	it('adds two numbers', function() {
		s = calculator.add(2,3);
		expect(s).toEqual(5);
	});
});
