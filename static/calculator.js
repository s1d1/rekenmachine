// functions to write:
// - input numbers
// - input decimal
// - input operators
// - calculate
// - clear-all 
// - update display

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', element => {
    if (element.target.matches('button')) {
        const key = element.target
        const action = key.dataset.action
        
        if (!action) {
            console.log('number key!')
        }
        
        if (
            action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide'
        ){
            console.log('operator key!')
        }

        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
})