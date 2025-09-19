const senhaCorreta = "12345"; // Defina a senha aqui
let tentativa;

do {
    tentativa = prompt("Digite a senha:");
} while (tentativa !== senhaCorreta);

alert("Senha correta! ✅");
