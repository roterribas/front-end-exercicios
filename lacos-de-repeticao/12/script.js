let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
let resultado = "";

for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
}

alert(resultado);
