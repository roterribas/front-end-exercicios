function gerarNome(mes, anoFinal) { // Função que gera nome divertido
  let parteMes; // Parte do nome baseada no mês
  let parteAno; // Parte do nome baseada no ano

  // Escolhe a palavra para o mês
  switch (mes) {
    case 1: parteMes = "Bug"; break;
    case 2: parteMes = "Code"; break;
    case 3: parteMes = "Loop"; break;
    case 4: parteMes = "Byte"; break;
    case 5: parteMes = "Stack"; break;
    case 6: parteMes = "Script"; break;
    case 7: parteMes = "Kernel"; break;
    case 8: parteMes = "Data"; break;
    case 9: parteMes = "Cloud"; break;
    case 10: parteMes = "Cyber"; break;
    case 11: parteMes = "Debug"; break;
    case 12: parteMes = "Pixel"; break;
    default: parteMes = "Anon"; // Caso inválido
  }

  // Escolhe a palavra para o último dígito do ano
  switch (anoFinal) {
    case 0: parteAno = "Master"; break;
    case 1: parteAno = "Ninja"; break;
    case 2: parteAno = "Samurai"; break;
    case 3: parteAno = "Wizard"; break;
    case 4: parteAno = "Hacker"; break;
    case 5: parteAno = "Guru"; break;
    case 6: parteAno = "Dev"; break;
    case 7: parteAno = "Sensei"; break;
    case 8: parteAno = "Coder"; break;
    case 9: parteAno = "Phantom"; break;
    default: parteAno = "Guest"; // Caso inválido
  }

  return parteMes + " " + parteAno; // Retorna nome composto
}

let mesNasc = Number(prompt("Digite seu mês de nascimento (1 a 12):")); // Captura mês
let anoNascFinal = Number(prompt("Digite o último número do seu ano de nascimento:")); // Captura último dígito

console.log("Seu nome de programador é:", gerarNome(mesNasc, anoNascFinal)); // Mostra no console
