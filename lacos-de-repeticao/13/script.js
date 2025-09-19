let faixa1 = 0, faixa2 = 0, faixa3 = 0;

for (let i = 1; i <= 20; i++) {
    let num = parseInt(prompt("Digite o " + i + "º número:"));

    if (num >= 0 && num <= 100) faixa1++;
    else if (num >= 101 && num <= 200) faixa2++;
    else if (num > 200) faixa3++;
}

alert("Entre 0 e 100: " + faixa1 +
      "\nEntre 101 e 200: " + faixa2 +
      "\nMaiores que 200: " + faixa3);
