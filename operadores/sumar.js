const process = require('process');

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

function sumar(a, b){
    return a + b
}

let resultado = sumar(numeroA, numeroB);
console.log(resultado);

