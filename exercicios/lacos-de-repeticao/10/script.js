let entrada;

do {
    entrada = prompt("Digite dois números separados por espaço (ou 'encerrar' para sair):");

    if (entrada.toLowerCase() !== "encerrar") {
        let numeros = entrada.split(" ");
        let soma = parseFloat(numeros[0]) + parseFloat(numeros[1]);
        alert("A soma é: " + soma);
    }

} while (entrada.toLowerCase() !== "encerrar");
