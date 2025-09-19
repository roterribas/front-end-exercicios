let maior = -Infinity;
let menor = Infinity;

for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Digite o " + i + "º número:"));

    if (num > maior) maior = num;
    if (num < menor) menor = num;
}

alert("Maior número: " + maior + "\nMenor número: " + menor);
