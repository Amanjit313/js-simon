/* 
- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.

- Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let numbers = []; // Array numeri random
let numberSelect = []; // Array numeri selezionati
let indovinaNumeri = []; // Array numeri combacianti

let contatore = 0;
let contatoreprompt = 0;
let counter = 6;

// Contatore per stampare i 5 numeri random da ricordare
while (contatore < 5){
  randomNumber = Math.floor(Math.random() * 100) + 1;
  contatore++;
  if(!numbers.includes(randomNumber)){
    numbers.push(randomNumber);
  }
}

// 5 secondi countdown
const clock = setInterval(contoallarovescia, 1000);

console.log("Counter Inizio!");
function contoallarovescia(){
  counter--;
  console.log(counter);

  // Stampo i numeri random
  document.getElementById("numeri").innerHTML = "Hai" + " " + counter + " " + "secondi per ricordarti questi numeri:" + " " + numbers;
  
  if(counter < 1){
    clearInterval(clock);
    console.log("Counter Fine!");
    document.getElementById("numeri").innerHTML = "";
    aftercounter();
  }
}

console.log("Lista dei numeri casuali estratti" + " " + numbers);
console.log("------------------------");

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

  // Confronti dei numeri
  for (let i = 0; i < numbers.length; i++){

    if(numbers.includes(numberSelect[i])){
      indovinaNumeri.push(numberSelect[i])
      console.log("Numeri combacianti" + indovinaNumeri);
      document.getElementById("numeriindovinati").innerHTML = "Ecco i numeri che hai indovinato" + " " + indovinaNumeri;
    }

  }

}
