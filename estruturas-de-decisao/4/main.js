let idade = Number(prompt("Digite sua idade:"));
let renda = Number(prompt("Digite sua renda mensal:"));
let salarioMinimo = 1412; // valor exemplo, pode trocar se quiser
let rendaNecessaria = salarioMinimo * 2;

if (idade >= 18 && renda >= rendaNecessaria) {
  alert("Você está apto a realizar o consórcio.");
} else {
  alert("Você NÃO está apto a realizar o consórcio.");
}
