let idade = Number(prompt("Digite sua idade:"));

if (idade < 21) {
  alert("Você NÃO está apto ao financiamento, pois tem menos de 21 anos.");
} else {
  let renda = Number(prompt("Digite sua renda mensal (em R$):"));
  
  if (renda >= 3000) {
    alert("Você está apto a obter o financiamento do veículo.");
  } else {
    alert("Você NÃO está apto ao financiamento, pois sua renda é inferior a R$ 3.000,00.");
  }
}
