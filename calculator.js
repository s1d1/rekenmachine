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
}

function updateDisplay() {
    // select the element in HTML that is the screen (class)
    const display = document.querySelector('.calculator-screen');

    // update that element with value of displayValue 
    display.value = calculator.displayValue;
}

// event delegation: 
const keys = document.querySelector('.calculator-keys');

// set an eventlistener for when type 'click' that will dispatch an event that is explained after the arrow
keys.addEventListener('click', (event) => {
    // set the clicked element as target
    const {target} = event;

    // check if target is a button
    // if not, exit
    if (!target.matches('button')) {
        return;
    }

    // if target is button
    // print string for check

    // classlist.contains checks for string ('operator') in all the classes within the target 
    if (target.classlist.contains('key-operator')) {
        console.log('key-operator', target.value);
        return;
    }

    if (target.classlist.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classlist.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    if (target.classlist.contains('key-equal')) {
        console.log('key-equal', target.value);
        return;
    }

    if (target.classlist.contains('number')) {
        console.log('number', target.value);
        return;
    }

});