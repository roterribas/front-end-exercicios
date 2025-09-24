function calcularArea(tipo, medida1, medida2) {
  if (tipo === "quadrado") {
    return medida1 * medida1;
  } else if (tipo === "retangulo") {
    // Verifica se as medidas são iguais
    if (medida1 === medida2) {
      return "As medidas são iguais, isso forma um quadrado!";
    }
    return medida1 * medida2;
  } else {
    return "Forma inválida";
  }
}

let forma = prompt("Digite a forma (quadrado/retangulo):").toLowerCase();

if (forma === "quadrado") {
  let lado = Number(prompt("Digite o lado do quadrado:"));
  console.log("Área do quadrado:", calcularArea(forma, lado));
} else if (forma === "retangulo") {
  let largura = Number(prompt("Digite a largura:"));
  let altura = Number(prompt("Digite a altura:"));

  let resultado = calcularArea(forma, largura, altura);
  console.log("Resultado:", resultado);
} else {
  console.log("Forma inválida!");
}
