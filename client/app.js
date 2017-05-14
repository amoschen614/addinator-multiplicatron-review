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
