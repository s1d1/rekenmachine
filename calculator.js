// functions to write:
// - input numbers
// - input decimal
// - input operators
// - calculate
// - clear-all 
// - update display


// - lijst bijhouden en elke keer als er iets wordt ingetypt dan dat toevoegen aan de array
// - modifiers die ervoor zorgen hoe lang een variabele bestaat
// - op het moment dat je een variabel aanmaakt zonder iets ervoor, dan is het een global (die bestaat voor de gehele tijd van het programma)
// - je hebt een aantal keywords: var = maakt een variabel zoals je gewend bent in python (dus hij bestaat alleen binnen het programma)
// - keyword let = wordt gebruikt om variabelen aan te maken zoals in C. Variabel bestaat dan alleen binnen een statement/loop
// - keyword const = hetzelfde als let, maar ook constant dus je kan het niet meer aanpassen
// - als je een variabel gebruikt: probeer const, probeer dan let, dan var, dan globals

// const display = document.querySelector('screen');
const buttons = document.querySelectorAll('button');
formula = [];

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const button_value = event.target.value;

    if (event.target.classList.contains('number')) {
        formula.push(button_value);
        console.log(button_value);
    }

    else if (event.target.classList.contains('decimal')) {
        formula.push(button_value);
        console.log(button_value);
    }

    else if (event.target.classList.contains('operator')) {
        formula.push(button_value);
        console.log(button_value);
    }

    else if (event.target.classList.contains('clear')) {
        formula.length = 0;
        console.log(button_value);
    }

    else {
        console.log(JSON.stringify(formula));
        calculate();
    }
}

function calculate(event){
    for (let i = 0; i < formula.length; i++){

    }
}

