let n = parseInt(prompt("Digite um número maior que 1:"));
let soma = 0;

for (let i = 0; i <= n; i++) {
    soma += i;
}

alert("A soma dos números de 0 até " + n + " é: " + soma);
