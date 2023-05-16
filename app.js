const process = require('process')
const calculadora = require('./calculadora');

const operadores = ['sumar', 'restar', 'multiplicar', 'dividir']
const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];

let resultado = 0;
if(operadores.includes(operacion)){
    if(operacion === "sumar"){
        resultado = calculadora.sumar(numeroA,numeroB)
     } else if(operacion === "restar"){
        resultado = calculadora.restar(numeroA,numeroB)
     } else if(operacion === "multiplicar"){
        resultado = calculadora.multiplicar(numeroA,numeroB)
     } else if(operacion === "dividir"){
        resultado = calculadora.dividir(numeroA,numeroB)
     }
     console.log(resultado);
   }else{
    console.log("Error caracter no admitido");
}