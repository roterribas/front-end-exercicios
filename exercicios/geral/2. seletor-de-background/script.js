function mostrarCor() {
  let cor = document.getElementById("inputCor").value
  let resultado = document.getElementById("resultado1")
  
  document.body.style.backgroundColor = cor
  resultado.innerHTML = `Cor selecionada: ${cor}`
  resultado.style.color = "white"
}
