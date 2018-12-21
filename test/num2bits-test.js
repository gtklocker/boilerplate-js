const num2bits = require('../lib/num2bits');
const assert = require('assert');

function to64bit(str) {
	return str.padEnd(64, '0');
}

describe('num2bits', function() {
	it('should give the number representation of 4', () => {
		assert(num2bits(4) === to64bit('001'));
	});

	it('should work on floating points', () => {
		assert(num2bits(42) !== num2bits(42.42));
	});
});
