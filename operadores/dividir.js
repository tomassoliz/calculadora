const process = require('process');

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

function dividir(a, b){
    if (b > 0){
        return a / b
    }
    return "No se puede dividir por 0"
}

let resultado = dividir(numeroA, numeroB);
console.log(resultado);
