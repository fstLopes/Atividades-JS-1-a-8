let contSoma = 0;
let contSub = 0;
let contMult = 0;
let contDiv = 0;

let opcao = "";

while (opcao !== "e" && opcao !== "E") {
  opcao = prompt(
    "=== CALCULADORA ===\n" +
    "a) SOMA\n" +
    "b) SUBTRAÇÃO\n" +
    "c) MULTIPLICAÇÃO\n" +
    "d) DIVISÃO\n" +
    "e) SAIR\n\n" +
    "Escolha uma opção:"
  );

  if (opcao === "a" || opcao === "A") {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    console.log("Resultado:", n1 + n2);
    contSoma++;
  } else if (opcao === "b" || opcao === "B") {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    console.log("Resultado:", n1 - n2);
    contSub++;
  } else if (opcao === "c" || opcao === "C") {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    console.log("Resultado:", n1 * n2);
    contMult++;
  } else if (opcao === "d" || opcao === "D") {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    if (n2 !== 0) {
      console.log("Resultado:", n1 / n2);
      contDiv++;
    } else {
      console.log("Erro: divisão por zero!");
    }
  } else if (opcao === "e" || opcao === "E") {
    console.log("\n--- RESUMO DAS OPERAÇÕES ---");
    console.log("Somas:", contSoma);
    console.log("Subtrações:", contSub);
    console.log("Multiplicações:", contMult);
    console.log("Divisões:", contDiv);
    console.log("Fim do programa.");
  } else {
    console.log("Opção inválida, tente de novo.");
  }
}
