const process = require('process');

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

function restar(a, b){
    return a - b
}

let resultado = restar(numeroA, numeroB);
console.log(resultado);

