let numero;

do {
    numero = parseInt(prompt("Digite 1 ou 0:"));
} while (numero !== 0 && numero !== 1);

alert("Você digitou: " + numero);
