console.log('js ok');

// 1 chiedere all'utente di inserire una parola
// 2 creare una funzione per capire se la parola inserita è palindroma

// 1
const userWord = prompt('inserisci una parola');
console.log(userWord);
paliCheck(userWord);

//2



    function paliCheck(parola){

        let wordReverse = '';

        for (let i = parola.length - 1; i >= 0; i--){
            wordReverse += parola.charAt(i);
        }
        console.log(`parola al contrario è ${wordReverse}`);

        if (parola == wordReverse){
            alert(`la parola ${parola} è palindroma`);
        } else { 
            alert(`la parola ${parola} non è palindroma`)
        }
    }
   