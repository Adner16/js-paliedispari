console.log('js ok');

// 1 chiedere all'utente di inserire una parola
// 2 creare una funzione per capire se la parola inserita è palindroma

// 1
const userWord = prompt('inserisci una parola');
console.log(userWord);
paliCheck(userWord);

//2

    function paliCheck(parola){
        for (let i = parola.length - 1; i >= 0; i--){
            wordReverse = parola.charAt(i);
            console.table(`parola al contrario è ${wordReverse}`);
        }
        for (let i = 0; i < parola.length; i++){
            wordForward = parola.charAt(i);
            console.log(`parola dritta è ${wordForward}`)
        }
        if (wordForward == wordReverse){
            alert(`la parola ${userWord} è palindroma`);
        } else { 
            alert(`la parola ${userWord} non è palindroma`)
        }
    }
   