// functions to write:
// - input numbers
// - input decimal
// - input operators
// - calculate
// - clear-all 
// - update display

// object that can be updated
const calculator = {
    displayValue: '0',
    first: null,
    wait_on_second: false,
    operator: null,
  };

function inputDigit(digit) {
    const {displayValue} = calculator;
    // change displayValue on calculator to updated displayvalue
    // if displayvalue is 0, replace it with the digit, otherwise append digit to the displayvalue
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function inputDecimal(dot) {
    // if the displayvalue of the calculator does not already contain a decimal, add it 
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const {first, displayValue, operator} = calculator;

    // make string displayValue a float
    const inputValue = parseFloat(displayValue);


}

function updateDisplay() {
    // select the element in HTML that is the screen (class)
    const display = document.querySelector('.calculator-screen');

    // update that element with value of displayValue 
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
// set an eventlistener for when type 'click' that will dispatch an event that is explained after the arrow
keys.addEventListener('click', (event) => {
    // set the clicked element as target
    const { target } = event;

    // check if target is a button
    // if not, exit
    if (!target.matches('button')) {
        return;
    }

    // if target is button
    // print string for check

    // classlist.contains checks for string ('operator') in all the classes within the target 
    if (target.classList.contains('key-operator')) {
        console.log('key-operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    if (target.classList.contains('key-equal')) {
        console.log('key-equal', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();

});