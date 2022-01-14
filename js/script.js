console.log('js ok');

// 1 l utente sceglie pari o dispari
// 2 l utente inserisce un numero da 1 a 5
// 3 generiamo un numero random da 1 a 5 per il computer
// 4 sommiamo i due numeri
// 5 stabiliamo se la somma è pari o dispari
// 6 dichiara il vincitore


// 1

const numType = prompt('pari o dispari?').trim();
console.log(`scelta user ${numType}`);

// 2
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(`user number ${userNum}`);

// 3
const compNum = randomNum();
console.log(`numero random computer ${compNum}`);

// 4
const result = userNum + compNum;
console.log(`risultato ${result}`);

// 5 //6
if (result % 2 && numType == 'dispari'){
    alert('YOU WIN');
} else if (result % 2==0 && numType == 'dispari' ){
    alert('YOU LOSE');
} else if (result % 2 && numType == 'pari'){
    alert('YOU LOSE');
} else if (result % 2 == 0 && numType == 'dispari'){
    alert('YOU WIN');
}

function randomNum (){
 const randomNum = Math.floor(Math.random()* 5 + 1);
 return randomNum;
} 