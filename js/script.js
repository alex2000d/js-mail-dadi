// creo un arrey
const email = ["giorgio@gmail.com", "alessandro@gmail.com", "andrea@gmail.com", "francesco@gmail.com", "giulia@gmail.com"];

// recupero il pulsante dal dom
let button = document.getElementById('search');

button.addEventListener('click', function(){


    // recupero il valore inserito nel campo input
    let word = document.getElementById('email').value


    // creo una flag o variabile di controllo
    let found_email = false;
    
    // ciclo l'arrey e lo confronto con la parola inserita nella form
    for (let i = 0; i < email.length; i++){
        if (email[i] === word){
            // se è vera imposto la variabile a true
            found_email = true;
        }
    }
    // mostro il risultato in console
    if (found_email === true){
        console.log(`${word} loggato`)
    }
    else(
        console.log(`${word} utente non trovato`)
       
    )
})