module.exports = function num2bits(num) {
	res = '';
	for (let i = 0; i < 64; ++i) {
		res += (num & 1) === 0 ? '0' : '1';
		num >>= 1;
	}
	return res;
};
