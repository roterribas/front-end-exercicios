let contador = 0;
let maior = -Infinity; // Começa com o menor valor possível

do {
    let numero = parseFloat(prompt("Digite o " + (contador + 1) + "º número:"));
    
    if (numero > maior) {
        maior = numero; // Atualiza o maior
    }
    
    contador++;
} while (contador < 5);

alert("O maior número digitado foi: " + maior);
