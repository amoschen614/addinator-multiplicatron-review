const multiply = function(factor1, factor2) {
	return factor1 * factor2;
};

const multiplyAll = function(factorArr) {
	switch(factorArr.length) {
		case(0): return undefined;
		case(1): return factorArr[0];
		case(2): return multiply(factorArr[0], factorArr[1]);
		default:
		var product = 1;
		for (var i = 0; i < factorArr.length; i++) {
			product *= factorArr[i];
		}
		return product;
	}
}

module.exports = {
	multiply: multiply,
	multiplyAll: multiplyAll
};