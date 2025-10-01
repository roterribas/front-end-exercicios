let itens = [];

function adicionarItem() {
  const itemInput = document.getElementById("itemInput").value.trim().toLowerCase();
  const nome = document.getElementById("nameInput").value.trim();

  if (!itemInput || !nome) {
    alert("⚠️ Digite um nome e um item!");
    return;
  }

  const jaExiste = itens.some(i => i.itemOriginal.toLowerCase() === itemInput);
  if (jaExiste) {
    alert("❌ Este item já foi adicionado!");
    return;
  }

  const emoji = escolherEmoji(itemInput);
  const itemComEmoji = `${emoji} ${itemInput}`;
  itens.push({ item: itemComEmoji, itemOriginal: itemInput, pessoas: [] });
  atualizarLista();
  document.getElementById("itemInput").value = "";
}

function escolherEmoji(item) {
  item = item.toLowerCase();

  const categorias = [
    { palavras: ["pizza", "calabresa", "marguerita"], emoji: "🍕" },
    { palavras: ["hamburguer", "cheeseburger"], emoji: "🍔" },
    { palavras: ["salsicha", "hot dog"], emoji: "🌭" },
    { palavras: ["picanha", "alcatra", "fraldinha", "linguiça", "carne", "costela"], emoji: "🥩" },
    { palavras: ["frango", "coxa", "asa"], emoji: "🍗" },
    { palavras: ["salada", "alface", "tomate", "rúcula"], emoji: "🥗" },
    { palavras: ["pão", "baguete", "pão de alho"], emoji: "🍞" },
    { palavras: ["bolo", "brigadeiro", "torta", "doce", "sobremesa"], emoji: "🍰" },
    { palavras: ["vinho", "espumante"], emoji: "🍷" },
    { palavras: ["cerveja", "chopp"], emoji: "🍺" },
    { palavras: ["suco", "laranja", "uva"], emoji: "🧃" },
    { palavras: ["refrigerante", "água", "guaraná"], emoji: "🥤" },
    { palavras: ["prato", "copo", "talheres", "guardanapo"], emoji: "🧻" },
    { palavras: ["macarrão"], emoji: "🍝" },
    { palavras: ["banana"], emoji: "🍌" }
  ];

  for (const categoria of categorias) {
    if (categoria.palavras.some(p => item.includes(p))) {
      return categoria.emoji;
    }
  }

  return "🍽"; // emoji padrão para itens não categorizados
}

function atualizarLista() {
  const lista = document.getElementById("listaItens");
  lista.innerHTML = "";

  itens.forEach((obj, index) => {
    const nomes = obj.pessoas.length > 0 ? `Reservado por ${obj.pessoas.join(", ")}` : "Disponível";
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${obj.item} - ${nomes}</span>
      <button onclick="reservarItem(${index})">✅ Eu trago!</button>
      <button onclick="cancelarEscolha(${index})">❌ Cancelar</button>
      <button onclick="confirmarExclusao(${index})">🗑️ Excluir</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("contador").textContent = `${itens.length} itens adicionados`;
  atualizarResumo();
}

function reservarItem(index) {
  const nome = document.getElementById("nameInput").value.trim();
  if (!nome) {
    alert("⚠️ Digite seu nome primeiro!");
    return;
  }

  if (!itens[index].pessoas.includes(nome)) {
    itens[index].pessoas.push(nome);
    atualizarLista();
  } else {
    alert("ℹ️ Você já está na lista para este item.");
  }
}

function cancelarEscolha(index) {
  const nome = document.getElementById("nameInput").value.trim();
  if (!nome) {
    alert("⚠️ Digite seu nome para cancelar.");
    return;
  }

  const pos = itens[index].pessoas.indexOf(nome);
  if (pos !== -1) {
    itens[index].pessoas.splice(pos, 1);
    atualizarLista();
  } else {
    alert("ℹ️ Você não está na lista deste item.");
  }
}

function confirmarExclusao(index) {
  const confirmar = confirm("🗑️ Tem certeza que deseja excluir este item?");
  if (confirmar) {
    excluirItem(index);
  }
}

function excluirItem(index) {
  itens.splice(index, 1);
  atualizarLista();
}

function atualizarResumo() {
  const resumo = document.getElementById("resumoFinal");
  const trazidos = itens.filter(i => i.pessoas.length > 0);
  if (trazidos.length === 0) {
    resumo.innerHTML = "<p>Ninguém se comprometeu ainda.</p>";
    return;
  }

  let html = `<h3>Lista Final (${trazidos.length} itens confirmados):</h3><ul>`;
  trazidos.forEach(i => {
    html += `<li><strong>${i.item}</strong>: ${i.pessoas.join(", ")}</li>`;
  });
  html += "</ul>";
  resumo.innerHTML = html;
}
