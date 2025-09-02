let s, t = 0;

while(x >= 1){

  s = Number(prompt("Qual o salario? " + x + "?"));
  t += s;
  x--;

}

console.log("O salario total da familia é de: ", t);