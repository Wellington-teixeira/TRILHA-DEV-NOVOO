// let i = 1;

// while (i <= 10) {
//     console.log ( 5 * i);
// i++;
// }

// for (let i = 1; i <=10 ; i++) {
//     console.log(5*+i);
// }

let multiplicacao = 0

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        dizerola(i); 
    }
    let retornocalculadora = 0;
    retornocalculadora = (calculadora (i,5))

    console.log (retornocalculadora)
    
}

function dizerola(numero) {
    multiplicacao + 1
    console.log ("ola!" + multiplicacao);
}


function calculadora(a,B) {
    
    multiplicacao = a*B
    return multiplicacao

}

