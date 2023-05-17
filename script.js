// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Math.floor(Math.random() * 6) + 1;
document.getElementById('button').addEventListener('click',function(){
    document.getElementById('outputhuman').innerHTML=(Math.floor(Math.random() * 6) + 1);
}
)
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
