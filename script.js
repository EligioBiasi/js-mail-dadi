// Gioco dei dadi:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

document.getElementById('button').addEventListener('click',function(){
   let humanNum = (parseInt(Math.floor(Math.random() * 6) + 1));
   let humanResult = document.getElementById('outputhuman').innerHTML = 'Il tuo risultato è ='+ ' ' + humanNum
   let computerNum = (parseInt(Math.floor(Math.random() * 6)) + 1);
   let computerResult = document.getElementById('outputcomputer').innerHTML = 'Il risultato del computer è ='+ ' ' + computerNum

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.

   if(humanNum < computerNum){
        document.getElementById('final-output').innerHTML = 'Hai perso, la tua anima è mia!'
        console.log(document.getElementById('final-output').innerHTML = 'Hai perso, la tua anima è mia!')
    }else if(humanNum > computerNum){
        document.getElementById('final-output').innerHTML = 'Hai vinto!'
        console.log(document.getElementById('final-output').innerHTML = 'Hai vinto!')
    }else{
        document.getElementById('final-output').innerHTML = 'Pareggio!'
        console.log(document.getElementById('final-output').innerHTML = 'Pareggio!')
    }
}
)

// Chiedi all’utente la sua email,
   const mailList = ["gabibbo@email.com", "riccardofalegname@email.com", "miamail.email.com"];
    document.getElementById('button-email').addEventListener('click',function(){
        const userEmail = document.getElementById('mail-content').value;
        console.log(userEmail)

        // controlla che sia nella lista di chi può accedere
        // stampa un messaggio appropriato sull’esito del controllo.
        if(userEmail.value == mailList[0]){
            document.getElementById('output-email').innerHTML = 'Complimenti la tua mail è gabibbo@email.com'
        } else if(userEmail.value == mailList[1]){
            document.getElementById('output-email').innerHTML = 'Complimenti la tua mail è riccardofalegname@email.com'
        } else if(userEmail.value == mailList[2]){
            document.getElementById('output-email').innerHTML = 'Complimenti la tua mail è miamail.email.com'
        } else {
            document.getElementById('output-email').innerHTML = 'La tua mail non è presente'
        }
    }
    )

