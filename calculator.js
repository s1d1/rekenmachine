const buttons = document.querySelectorAll('button');
formula = [];

buttons.forEach(function(button) {
    button.addEventListener('click', get_formula);

});

function get_formula(event) {
    const button_value = event.target.value;

    if (event.target.classList.contains('number')) {
        formula.push(button_value);
        document.getElementById("screen").value = update_screen('number', button_value);
    }
    else if (event.target.classList.contains('decimal')) {
        formula.push(button_value);
        document.getElementById("screen").value = update_screen('decimal', button_value);
    }
    else if (event.target.classList.contains('operator')) {
        formula.push(button_value);
        document.getElementById("screen").value = update_screen('operator', button_value);
    }
    else if (event.target.classList.contains('clear')) {
        formula.length = 0;
        document.getElementById("screen").value = update_screen('clear', button_value);
    }
    else if (event.target.classList.contains('equal')) {
        solution = calculate(event);
        display_solution(solution);
    }
}

function update_screen(category, val) {
    screen_display = document.getElementById("screen").value;

    if (category == 'number') {
        screen_display = val;
    }
    else if (category == 'decimal') {
        screen_display = val;
    }
    else if (category == 'operator') {
        screen_display = val;
    }
    else { 
        screen_display = '0';
    }
    return screen_display;
}

function display_solution(solution) {
    document.getElementById("screen").value = solution;
}

function calculate(event) {
    // bewaar operator
    for (let i = 0; i < formula.length; i++) {
        if (formula[i] == '+') {
            operator = '+';
            index_operator = i;
            continue;
        }
        else if (formula[i] == '-') {
            operator = '-'
            index_operator = i;
            continue;
        }
        else if (formula[i] == '/') {
            operator = '/';
            index_operator = i;
            continue;
        }
        else if (formula[i] == '*') {
            operator = '*';
            index_operator = i;
            continue;
        }
    }

    // bewaar eerste en tweede nummer 
    number = [];
    for (let j = 0; j < index_operator; j++) {
        number.push(formula[j]);
    }
    x = number.join('');
    const first_number = parseFloat(x);

    number_two = [];
    for (let k = index_operator + 1; k < formula.length; k++) {
        number_two.push(formula[k]);
    }
    y = number_two.join('');
    const second_number = parseFloat(y);

    // bereken de som op basis van de operator
    if (operator == '+') {
        solution = first_number + second_number;
    }
    else if (operator == '-') {
        solution = first_number - second_number;
    }
    else if (operator == '/') {
        solution = first_number / second_number;
    }
    else {
        solution = first_number * second_number;
    }

    return solution;
}
