// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

document.getElementById('button').addEventListener('click',function(){
   let humanNum = (parseInt(Math.floor(Math.random() * 6) + 1));
   let humanResult = document.getElementById('outputhuman').innerHTML = 'Il tuo risultato è ='+ ' ' + humanNum
   let computerNum = (parseInt(Math.floor(Math.random() * 6)) + 1);
   let computerResult = document.getElementById('outputcomputer').innerHTML = 'Il risultato del computer è ='+ ' ' + computerNum
    
   if(humanNum < computerNum){
        document.getElementById('final-output').innerHTML = 'Hai perso, la tua anima è mia!'
    }else if(humanNum > computerNum){
        document.getElementById('final-output').innerHTML = 'Hai vinto!'
    }else{
        document.getElementById('final-output').innerHTML = 'Pareggio!'
    }

}
)
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
