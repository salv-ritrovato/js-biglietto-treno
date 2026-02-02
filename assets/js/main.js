/* Tools:
- User's custom input (numero km da percorrere + età passeggero)
- Math operators
- Conditionals (if, else) */

/* VARIABLES */
/* Utilizzo parseInt per l'età perché è sempre un numero tondo mentre invece parseFloat per i KM perché potrebbero avere decimali */

const kilometers = parseFloat(prompt('How many kilometers do you want to travel?'))
const age = parseInt(prompt('How old are you?'))


/* TESTING IF IT WORKS */
console.log(kilometers, age)