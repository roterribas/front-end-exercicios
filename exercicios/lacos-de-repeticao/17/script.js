let n = parseInt(prompt("Quantos números da sequência de Fibonacci deseja ver?"));
let a = 0, b = 1, resultado = "";

for (let i = 1; i <= n; i++) {
    resultado += a + (i < n ? ", " : "");
    let proximo = a + b;
    a = b;
    b = proximo;
}

alert("Sequência de Fibonacci:\n" + resultado);
