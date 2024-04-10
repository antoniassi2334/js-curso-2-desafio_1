let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function verificarbotao(){
    alert("o botão foi clicado")
}

function verificarAlert(){
    alert("Eu amo js")
}

function verificarPrompt(){
    let cidade = prompt("digite um nome de uma cidade do Brasil");
    alert(`estive em ${cidade} e lembrei de voce`);
}
function verificarsoma(){
    let numero1 = parseInt(prompt("digite um numero"));
    let numero2 = parseInt(prompt("digite outro numero"));
    let resultado = numero1 + numero2;
    alert (`o resultado da soma é ${resultado}`);
}


