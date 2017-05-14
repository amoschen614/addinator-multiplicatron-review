(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const add = function(num1, num2) {
  return num1 + num2;
};

module.exports = add;

},{}],2:[function(require,module,exports){
const add = require('./adder.js');
const multiplier = require('./multiplier.js');

class ViewManager {
    connectEventHandlers() {
        document.getElementById('add-form-numbers').addEventListener('submit', this.onAddSubmit.bind(this));
        //wires up event handler for form submit which has id="form-numbers", and 'submit' is the event type when calculate button is pressed

        document.getElementById('multiply-form-numbers').addEventListener('submit', this.onMultiplySubmit.bind(this));
        document.getElementById('new-factor').addEventListener('click', this.onClick.bind(this));
    }
    onAddSubmit(event) {
        event.preventDefault(); //block form from actually submitting (because it causes page refresh)

        //grab number values as strings and cast to ints
        let num1 = parseInt(document.getElementById('add-input-num1').value, 10);
        let num2 = parseInt(document.getElementById('add-input-num2').value, 10);

        //add numbers and output
        const sum = add(num1, num2);
        this.renderSum(sum);
    }
    renderSum(sum) {
        document.querySelector('.sum').textContent = sum;
    }
    onMultiplySubmit(event) {
        event.preventDefault();
        let factors = [];
        for (var i = 0; i < formElements.length; i++) {
            factors.push(parseInt(formElements[i].value, 10));
        }
        const product = multiplier.multiplyAll(factors);
        this.renderProduct(product);
    }
    renderProduct(product) {
        var isValid = true;
        for (var i = 2; i < formElements.length; i++) {
            isValid = isValid && formElements[i].value;
        }
        if (isValid) {
            document.querySelector('.product').textContent = product;
        }
    }
    onClick(event) {
        event.preventDefault();
        var newElement = document.createElement('input');
        formElements.push(newElement);
        newElement.setAttribute('id', 'multiply-input-num' + formElements.length);
        newElement.setAttribute('type', 'text');
        newElement.setAttribute('autocomplete', 'off');
        (document.getElementById('multiply-form-numbers').insertBefore(document.createElement('div'), document.getElementById('end-input'))).appendChild(newElement);
    }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

var formElements = [];
formElements.push(document.getElementById('multiply-input-num1'));
formElements.push(document.getElementById('multiply-input-num2'));

},{"./adder.js":1,"./multiplier.js":3}],3:[function(require,module,exports){
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
},{}]},{},[2]);
