(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const add = function(num1, num2) {
  return num1 + num2;
};

module.exports = add;

},{}],2:[function(require,module,exports){
const add = require('./adder.js');

class ViewManager {
  connectEventHandlers() {
    document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
    //wires up event handler for form submit which has id="form-numbers", and 'submit' is the event type when calculate button is pressed
  }
  onSubmit(event) {
    event.preventDefault(); //block form from actually submitting (because it causes page refresh)
    
    //grab number values as strings and cast to ints
    let num1 = parseInt(document.getElementById('input-num1').value, 10);
    let num2 = parseInt(document.getElementById('input-num2').value, 10);

    //add numbers and output
    const sum = add(num1, num2);
    this.renderSum(sum);
  }

  renderSum(sum) {
    document.getElementById('sum').textContent = sum;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
},{"./adder.js":1}]},{},[2]);
