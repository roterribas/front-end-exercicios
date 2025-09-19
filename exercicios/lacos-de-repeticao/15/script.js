const senhaCorreta = "12345";
let tentativa;
let erros = 0;

do {
    tentativa = prompt("Digite a senha:");
    if (tentativa !== senhaCorreta) erros++;
} while (tentativa !== senhaCorreta);

alert("Senha correta! Tentativas incorretas: " + erros);
