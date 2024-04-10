let altura = parseFloat(prompt("informe sua altura"));
let peso = parseFloat(prompt("informe seu peso"));

function calcularIMC(parPeso,parAltura) {
   return parPeso/(parAltura*parAltura);
} 

let imc = calcularIMC(peso, altura);
alert(`o valor do IMC é ${imc.toFixed(2)}`);