// 1. generare 5 numeri casuali senza ripetizioni e mostrarli per 30 secondi => setTimeout + Math
// 2. aprire un prompt() per ogni numero in modo che l'utente possa inserire ogni numero => setTimeout
// 3. mostra in pagina i numeri indovinati
    // 3.1 fare un ciclo che controlli i numeri inseriti dall'utente e che li metta in relazione con in numeri casuali
    // 3.2 mostrare solo quelli uguali


// container
const numCont = document.getElementById("container");

// array per i numeri
let arrNum = [];

randomGenerator();
console.log(arrNum);

// html
const numDiv = document.createElement("div");
numDiv.innerHTML = `
    <h2>
        Questi sono i tuoi numeri : 
        ${arrNum}
    </h2>
`;

numCont.append(numDiv);

// i numeri scompaiono
setTimeout(numberNone, 5000);

// richiesta all'utente
setTimeout(numberUser, 5000);


// funzioni
function randomGenerator () {
    while (arrNum.length < 5) {

        let Num = Math.floor(Math.random() * 100) + 1;

        let duplicati = false;

        for (i = 0; i < arrNum.length; i++) {
            if (Num === arrNum[i]) {
                duplicati = true;
            }
        }

        if (duplicati == false) {
            arrNum.push(Num)
        }
     
    }
}

function numberNone () {
    numDiv.classList.add("time_out");
}

function numberUser () {
    for (i = 0; i < 5; i++) {
        const numUser = parseInt(prompt("Inserisci qui, uno alla volta, i numeri che hai visto: "));
        console.log(numUser);
    }
}