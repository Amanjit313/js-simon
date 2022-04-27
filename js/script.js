/* 
- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.

- Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let number = [];
let numberSelect = [];
let contatore = 0;
let contatoreprompt = 0;
let counter = 6;

// Contatore per stampare i 5 numeri random da ricordare
while (contatore < 5){
  randomNumbers = Math.floor(Math.random() * 100) + 1;
  contatore++;
  if(!number.includes(randomNumbers)){
    number.push(randomNumbers);
  }
}

// Stampo i numeri random
console.log("Lista dei numeri casuali estratti" + " " + number);
document.getElementById("numeri").innerHTML = "Hai 5 secondi per ricordarti questi numeri:" + " " + number;
console.log("------------------------");

// 5 secondi countdown
const clock = setInterval(contoallarovescia, 1000);

console.log("Counter Inizio!");
function contoallarovescia(){
  counter--;
  console.log(counter);
  if(counter < 1){
    clearInterval(clock);
    clearInterval(number);
    console.log("Counter Fine!");
    aftercounter();
  }
}

// I numeri da indovinare tramite i prompt dopo i 5 secondi
function aftercounter(){

  while (contatoreprompt < 5){
  let numberprompt  = parseInt (prompt("Inserisci i numeri ricordati da uno a uno"));
  console.log("Numero scelto" + " " + numberprompt);
  contatoreprompt++;
  if(!numberSelect.includes(numberprompt)){
    numberSelect.push(numberprompt);
    console.log(numberSelect);
    document.getElementById("numeriselezionati").innerHTML = "I numeri scelti:" + " " + numberSelect;
  }
}

}

// Confronti dei numeri

/* const numeriIndovinati = () */

