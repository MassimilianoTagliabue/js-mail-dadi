
const mail = prompt ("inserisci la tua mail");
const lista = ["gigio@gmail.com", "pippo@gmail.com" , "pluto@gmail.com"];
let message=`accesso negato alla mail ${mail}`;

console.log(mail);
console.log(lista);

for(let i = 0; i < lista.length; i++){

    const currItem = lista[i];
    console.log(currItem);

    if( mail == currItem){

        message=`accesso consentito alla mail ${mail}`;
    }
}

console.log(message);