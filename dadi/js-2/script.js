// creo un generatore random con la libreria math
let player = ((Math.random() * 6 + 1 ).toFixed());
console.log(player)

let computer = ((Math.random() * 6 + 1 ).toFixed());
console.log(computer)
// se il player ha il numero piu alto allora comparirà la scritta hai vinto in console
if(player > computer){
    console.log('hai vinto')
    
}
// se il computer ha il numero piu alto allora comparirà la scritta in console hai perso
else if(player < computer){
    console.log('hai perso')
}
// altrimenti comparirà la scritta pareggio in console
else{
    console.log('pareggio')
}