const process = require('process');

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

function multiplicar(a, b){
    return a * b
}

let resultado = multiplicar(numeroA, numeroB);
console.log(resultado);

