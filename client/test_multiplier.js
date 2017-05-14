const multiply = require('./multiplier.js').multiply;
const multiplyAll = require('./multiplier.js').multiplyAll;

class TestSuite {
	runTest(testName) {
		const result = this[testName]();
		console.log(result, testName);
	}

	runTests() {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
		.filter(prop => this[prop] instanceof Function)
		.filter(prop => prop.indexOf('test') !== -1)
		.forEach(testName => this.runTest(testName));
	}

	assertEquals(a, b) {
		return a === b;
	}

	testMultiplyTwoPositiveIntegers() {
		return this.assertEquals(multiply(3, 4), 12);
	}

	testMultiplyTwoNegativeIntegers() {
		return this.assertEquals(multiply(-3, -4), 12);
	}

	testMultiplyPositiveAndNegativeIntegers() {
		return this.assertEquals(multiply(3, -4), -12);
	}

	testMultiplyPositiveIntegerByZero() {
		return this.assertEquals(multiply(3, 0), 0);
	}

	testMultiplyNegativeIntegerByZero() {
		return this.assertEquals(multiply(0, -4), 0);
	}

	testMultiplicationIdentityProperty() {
		var randomNum = Math.floor(Math.random()*10);
		return this.assertEquals(multiply(randomNum, 1), randomNum);
	}

	testMultiplyAllThreePositiveIntegers() {
		return this.assertEquals(multiplyAll([2, 3, 4]), 24);
	}

	testMuliplyAllThreeNegativeIntegers() {
		return this.assertEquals(multiplyAll([-2, -3, -4]), -24);
	}

	testMultiplyAllTwoPositiveOneNegative() {
		return this.assertEquals(multiplyAll([2, 3, -4]), -24);
	}

	testMultiplyAllOnePositiveTwoNegative() {
		return this.assertEquals(multiplyAll([2, -3, -4]), 24);
	}

	testMultiplyAllTwoIntegers() {
		return this.assertEquals(multiplyAll([2, 3]), 6);
	}

	testMultiplyAllOneInteger() {
		return this.assertEquals(multiplyAll([2]), 2);
	}

	testMultiplyAllNoIntegers() {
		return this.assertEquals(multiplyAll([]), undefined);
	}

	testMultiplyAllByZero() {
		return this.assertEquals(multiplyAll([2, 3, 0]), 0);
	}

	testMultiplyAllByOne() {
		return this.assertEquals(multiplyAll([2, 3, 1]), 6);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();