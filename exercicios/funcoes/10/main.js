function calcularArea(tipo, medida1, medida2) { // Função que calcula área
  if (tipo === "quadrado") { // Se for quadrado
    return medida1 * medida1; // Área = lado²
  } else if (tipo === "retangulo") { // Se for retângulo
    return medida1 * medida2; // Área = largura * altura
  } else {
    return "Forma inválida"; // Caso forma não exista
  }
}

let forma = prompt("Digite a forma (quadrado/retangulo):").toLowerCase(); // Pergunta qual forma
if (forma === "quadrado") { // Caso quadrado
  let lado = Number(prompt("Digite o lado do quadrado:")); // Captura lado
  console.log("Área do quadrado:", calcularArea(forma, lado)); // Mostra resultado
} else if (forma === "retangulo") { // Caso retângulo
  let largura = Number(prompt("Digite a largura:")); // Captura largura
  let altura = Number(prompt("Digite a altura:")); // Captura altura
  console.log("Área do retângulo:", calcularArea(forma, largura, altura)); // Mostra resultado
} else { // Forma inválida
  console.log("Forma inválida!");
}
