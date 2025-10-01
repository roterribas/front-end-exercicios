document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio do formulário

  const numero = parseInt(document.getElementById('numero').value);
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = ''; // Limpa resultado anterior

  if (numero > 0) {
    let html = `<h2>🧮 Tabuada do número <span style='color:#d84315;'>${numero}</span></h2>`;
    html += `<table><tr><th>Operação</th><th>Resultado</th></tr>`;

    for (let i = 1; i <= 10; i++) {
      html += `<tr><td>${numero} × ${i}</td><td>${numero * i}</td></tr>`;
    }

    html += `</table>`;
    resultadoDiv.innerHTML = html;
  } else {
    resultadoDiv.innerHTML = `<p style='color:red;'>🚫 Por favor, digite um número positivo maior que zero.</p>`;
  }
});
