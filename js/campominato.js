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


// funzioni
// calcolo un numero casuale 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// funzione per creare le celle
function getCells(index) {
    const cell = document.createElement('div');
    cell.className = 'col-2';
    grid.appendChild(cell);
    cell.setAttribute('id', index + 1);


    return cell;
}

// function getEasy(index) {;
//     cell.className = 'celleasy col-2 ';
//     grid.appendChild(cell);
//     cell.setAttribute('id', index + 1);


//     return cell;
// }

// function getMedium(index) {;
//     cell.className = 'cellnormal col-2 ';
//     grid.appendChild(cell);
//     cell.setAttribute('id', index + 1);


//     return cell;
// }

// function gethard(index) {;
//     cell.className = 'cellhard col-2 ';
//     grid.appendChild(cell);
//     cell.setAttribute('id', index + 1);


//     return cell;
// }

// cella selezionata
function getColoredCells(totalCells) {
    for (let i = 0; i < totalCells; i++) {
        const cell = getCells(i);
        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-lightblue');
        })
    }
}


// VARIABILI
const selectDifficultyEasy = document.getElementById('easy');
const selectDifficultyNormal = document.getElementById('normal');
const selectDifficultyHard = document.getElementById('hard');
const resetGame = document.getElementById('reset');
const grid = document.getElementById('grid')

// dichiaro numeri per difficoltà
const numberEasy = getRandomNumber(1, 100);
const numberNormal = getRandomNumber(1, 81);
const numberHard = getRandomNumber(1, 49);


// evento sul click in easy
selectDifficultyEasy.addEventListener('click', function() {
        grid.innerHTML = '';
        getColoredCells(100);
        cell.classList.add("celleasy")
    })
    // evento sul click in medium
selectDifficultyNormal.addEventListener('click', function() {
        grid.innerHTML = '';
        getColoredCells(81);
        cell.classList.add("cellnormal")
    })
    // evento sul click in hard
selectDifficultyHard.addEventListener('click', function() {
    grid.innerHTML = '';
    getColoredCells(49);
    cell.className = 'cellhard'

})

resetGame.addEventListener('click', function() {
    grid.innerHTML = "";
})