let numero1 = 0;
let numero2 = 0;
let message;

numero1 = Math.floor( Math.random() * 6 + 1);
numero2 = Math.floor( Math.random() * 6 + 1);

console.log(numero1);
console.log(numero2);

if(numero1 > numero2){

    message = "il giocatore a vinto";
} else if ( numero1 === numero2){

    message = "pareggio";
} else {

    message = "il computer ha vinto";
}



console.log(message);