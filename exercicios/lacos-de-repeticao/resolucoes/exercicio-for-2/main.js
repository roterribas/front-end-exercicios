let peso = 0;
let pesoTotal = 0;

for (let cont = 1; cont < 11; cont += 1) {
	peso = prompt('Insira o peso da pessoa número ' + cont);
	pesoTotal = pesoTotal + Number(peso); // Converter para número
}

let media = pesoTotal / 10; // Cálculo da média
console.log(`A média de peso das pessoas é ${ media }`);