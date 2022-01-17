console.log('js ok')

// Consegna
// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di 
// gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// cosa mi serve?

// 1) far indicare il livello di difficoltà all'user
// 2)sviluppare la griglia


// come dati input dall'utente ---> scelta difficoltà è click sulle celle 

// cosa fare sotto banco? in base alla difficoltà eseguire un sistema di generazione celle o un'altro


// celle:
// funzione che mi generi le celle
// creare tramite la funzione i div che dovranno avere classe per colorarsi di blu
// FINE COMMENTI


// funzioni
// calcolo un numero casuale 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


// VARIABILI
const selectDifficultyEasy = document.getElementById('easy');
const selectDifficultyNormal = document.getElementById('normal');
const selectDifficultyHard = document.getElementById('hard');
const startGame = document.getElementById('play');

let cells = 8;
let columns = 8;
let totalCells = cells * columns;

console.log(cells)
console.log(columns)
console.log(totalCells)




// dichiaro numeri per difficoltà
const numberEasy = getRandomNumber(1, 100);
const numberNormal = getRandomNumber(1, 81);
const numberHard = getRandomNumber(1, 49);


console.log(numberEasy);
console.log(numberNormal);
console.log(numberHard);


// evento sul click in easy
selectDifficultyEasy.addEventListener('click', function() {

})