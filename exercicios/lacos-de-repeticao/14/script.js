let soma = 0;
let num;

do {
    num = parseFloat(prompt("Digite um número (negativo para encerrar):"));
    if (num >= 0) soma += num;
} while (num >= 0);

alert("A soma dos números positivos é: " + soma);
