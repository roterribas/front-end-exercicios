let n = prompt("Digite um número maior que 1:");
n = Number(n);

let soma = 0;
let i = 0;

while (i <= n) {
    soma = soma + i;
    console.log(`Passo ${i}: soma = ${soma}`);
    i++;
}

console.log(`✅ A soma dos números de 0 até ${n} é: ${soma}`);
