/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari */

// Metodo senza funzioni

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri

// let evenOrOdd = prompt ('choose even or odd');
// let number = parseInt(prompt ('insert your number from 1 to 5'));
// console.log(number);
// let numberCpu = parseInt((Math.floor(Math.random() * 5) + 1));
// console.log('number Cpu: ', numberCpu);
// let sum = '';
// sum = number + numberCpu;

// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)

// if (sum % 2 == 0) {
//   console.log('sum is even');
// } else {
//   console.log('sum is odd');
// }


// if (sum % 2 == 0 && evenOrOdd == "even" || sum % 2 != 0 && evenOrOdd == "odd") {
//     document.getElementById("winner").innerHTML = "User won";
// } else {
//     document.getElementById("winner").innerHTML = "Cpu won";
// }


// con funzioni

let evenOrOdd = prompt ('choose even or odd');
let numberUser = parseInt(prompt ('insert your number from 1 to 5'));
console.log(numberUser);
let numberCpu = parseInt((Math.floor(Math.random() * 5) + 1));
console.log('number Cpu: ', numberCpu);
let sum = '';
sum = numberUser + numberCpu;

//creiamo delle funzioni per i numeri random e per il check pari dispari

function numbers(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('sum is: ' + sum);

function isEven(num) {

    if (num % 2 == 0) {
        console.log('sum is even');
        return true;
    } 
    
    else {
        console.log('sum is odd');
        return false;
    }
}

if (isEven(sum) == true && evenOrOdd == "even" || isEven(sum) == false && evenOrOdd == "odd") {

    document.getElementById("winner").innerHTML = "User won";
} 
else {
    document.getElementById("winner").innerHTML = "Cpu won";
}