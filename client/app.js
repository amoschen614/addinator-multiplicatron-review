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