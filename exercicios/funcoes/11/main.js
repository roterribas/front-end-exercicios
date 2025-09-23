function converterTemp(temp, unidade) { // Função para converter temperatura
  if (unidade === "C") { // Se veio em Celsius
    return (temp * 9/5) + 32 + " °F"; // Converte para Fahrenheit
  } else if (unidade === "F") { // Se veio em Fahrenheit
    return ((temp - 32) * 5/9) + " °C"; // Converte para Celsius
  } else {
    return "Unidade inválida"; // Caso unidade não seja C ou F
  }
}

let temperatura = Number(prompt("Digite a temperatura:")); // Captura valor
let unidade = prompt("Digite a unidade de origem (C ou F):").toUpperCase(); // Captura unidade (C ou F)

console.log("Temperatura convertida:", converterTemp(temperatura, unidade)); // Mostra resultado
