const add = require('./adder.js');

class TestSuite {
  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        .filter(prop => this[prop] instanceof Function) //only properties with function values remain
        .filter(prop => prop.indexOf('test') !== -1)    //the word 'test' is found in function name
        .forEach(testName => this.runTest(testName));   //pass each property value remaining into iterator and call
  }

  runTest(testName) {
    const result = this[testName]();
    console.log(result, testName);
  }

  assertEquals(a, b) {
    return a === b;
  }

  testAddPositiveNumbers() {
    return this.assertEquals(add(5, 7), 12);
  }

  testAddNegativeNumbers() {
    return this.assertEquals(add(-5, -7), -12);
  }

  testAddMixedNumbers() {
    return this.assertEquals(add(5, -7), -2);
  }
}

const testSuite = new TestSuite();
testSuite.runTests();
