let nome = prompt("Digite o nome do seu Pokémon:");
let hp = 10;
let ataque = Math.floor(Math.random() * 3) + 1; // 1 a 3
let level = 1;

// Guardando estado inicial
let hpInicial = hp;
let ataqueInicial = ataque;
let levelInicial = level;

let vitorias = 0;
let derrotas = 0;

let opcao = "";

while (opcao !== "4") {
  opcao = prompt(
    "=== MENU ===\n" +
    "1) Batalhar\n" +
    "2) Vitorias vs Derrotas\n" +
    "3) Listar objeto\n" +
    "4) Sair\n\n" +
    "Escolha uma opcao:"
  );

  if (opcao === "1") {
    // Criar inimigo
    let inimigoHp = Math.floor(Math.random() * 6) + 5; // 5 a 10
    let inimigoAtk = Math.floor(Math.random() * 5); // 0 a 4

    console.log("=== BATALHA ===");
    console.log(nome + " (HP=" + hp + ", ATK=" + ataque + ") VS Inimigo (HP=" + inimigoHp + ", ATK=" + inimigoAtk + ")");

    let turno = 0;
    let hpPokemon = hp;
    let hpInimigo = inimigoHp;

    while (hpPokemon > 0 && hpInimigo > 0) {
      if (turno % 2 === 0) {
        hpInimigo -= ataque;
        console.log(nome + " atacou! Inimigo HP = " + hpInimigo);
      } else {
        hpPokemon -= inimigoAtk;
        console.log("Inimigo atacou! " + nome + " HP = " + hpPokemon);
      }
      turno++;
    }

    if (hpPokemon > 0) {
      console.log("Vitória!");
      vitorias++;
      level++;

      let escolha = prompt("Escolha um atributo para aumentar: 1=HP, 2=ATAQUE");
      if (escolha === "1") {
        hp += 1;
        console.log(nome + " aumentou seu HP! Agora tem HP = " + hp);
      } else {
        ataque += 1;
        console.log(nome + " aumentou seu Ataque! Agora tem ATK = " + ataque);
      }

    } else {
      console.log("Derrota...");
      derrotas++;
    }
  }

  else if (opcao === "2") {
    console.log("Vitórias: " + vitorias + " | Derrotas: " + derrotas);
  }

  else if (opcao === "3") {
    console.log("=== ESTADO DO POKEMON ===");
    console.log("Inicial: Nome=" + nome + ", HP=" + hpInicial + ", ATK=" + ataqueInicial + ", LVL=" + levelInicial);
    console.log("Atual: Nome=" + nome + ", HP=" + hp + ", ATK=" + ataque + ", LVL=" + level);
  }

  else if (opcao === "4") {
    console.log("Saindo...");
  }

  else {
    console.log("Opção inválida.");
  }
}
