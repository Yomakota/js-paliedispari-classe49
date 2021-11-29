/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione) */


// (Senza funzione)

let word = prompt('insert your word');
let reverseWord = '';

for (let i = word.length - 1; i >= 0; i--) {

  reverseWord += word[i]; 
}

if (word == reverseWord) {

  console.log('this is a palindrome');
} 

else { 

  console.log('this in not palindrome');
} 



// Creare una funzione per capire se la parola inserita è palindroma