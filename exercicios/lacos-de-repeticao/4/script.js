let base = 3;
let expoente = 10;
let resultado = 1;
let i = 1;

while (i <= expoente) {
    resultado = resultado * base;
    console.log(`Passo ${i}: ${resultado}`);
    i++;
}
