/* Tools:
- User's custom input (numero km da percorrere + età passeggero)
- Variables
- Math operators
- Conditionals (if, else) */

/* VARIABLES */
/* I'm using parseInt for age because it's always a whole number, whereas I use parseFloat for kilometers because they can have decimals */

const kilometers = parseFloat(prompt("How many kilometers do you want to travel?"));
const age = parseInt(prompt("How old are you?"));
let price = kilometers * 0.21;

/* TESTING IF IT WORKS */

console.log(kilometers, age);


/* IF/ELSE */
/* IF age is less than 18, apply a 20% discount  */
/* ELSE IF age is greater than 65, apply a 40% discount  */
/* ELSE (age is a number between 19 and 65) do nothing*/

if (age < 18) {
    price = price - (price * 20) / 100;
    console.log("20% discount applied");
} else if (age > 65) {
    price = price - (price * 40) / 100;
    console.log("40% discount applied");
} else {
    console.log("No discount applied");
}

/* PRINTING FINAL PRICE FOR THE USER */

console.log("The price of your ticket is:" + price.toFixed(2) + "€");