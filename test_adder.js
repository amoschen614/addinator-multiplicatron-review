const add = require('./adder.js');

class TestSuite {
  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        .filter(prop => this(prop) instanceof Function) //only properties with function values remain
        .filter(prop => prop.indexOf('test') !== -1)    //the word 'test' is found in function name
        .forEach(testName => this.runTest(testName));   //pass each property value remaining into iterator and call
  }

  assertEquals(a, b) {
    return a === b;
  }

  testAddPositiveNumbers() {
    const result = this.assertEquals(add(5, 7), 12);
  }

  testAddNegativeNumbers() {
    const result = this.assertEquals(add(-5, -7), -12);
  }

  testAddMixedNumbers() {
    const result = this.assertEquals(add(5, -7), -2);
  }
}

const testSuite = new TestSuite();
testSuite.runTests();
