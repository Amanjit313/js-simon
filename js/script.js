/* 
  - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.

  - Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

  - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let number = [];
let contatore = 0;
let contatoreprompt = 0;
let counter = 6;

while (contatore < 5){
  number = Math.floor(Math.random() * 10) + 1;
  console.log("Numero casuale" + " " + number);
  contatore++;
}

console.log("------------------------");

const clock = setInterval(contoallarovescia, 1000);

console.log("Counter Inizio!");
function contoallarovescia(){
  counter--;
  console.log(counter);
  if(counter < 1){
    clearInterval(clock);
    console.log("Counter Fine!");
    aftercounter();
  }
}

function aftercounter(){

  while (contatoreprompt < 5){
  let numberprompt  = parseInt (prompt("Inserisci il primo numero"));
  console.log("Numero scelto" + " " + numberprompt);
  contatoreprompt++;
}

}

