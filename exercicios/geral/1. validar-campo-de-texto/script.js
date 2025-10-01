document.getElementById("verificarBtn").onclick = function () {
  const valor = document.getElementById("meuInput").value.trim();

  if (valor === "") {
    alert("Campo inválido: está vazio.");
  } else {
    alert("Campo válido: está preenchido.");
  }
};
