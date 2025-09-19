let pares = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Digite o " + i + "º número:"));
    if (num % 2 === 0) pares++;
}

alert("Quantidade de números pares: " + pares);
