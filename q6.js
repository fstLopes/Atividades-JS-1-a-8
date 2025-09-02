let totalAlunos = 5;
let somaNotas = 0;

let idAluno1 = 'A001', notaAluno1 = 8.5;
let idAluno2 = 'A002', notaAluno2 = 7.0;
let idAluno3 = 'A003', notaAluno3 = 9.2;
let idAluno4 = 'A004', notaAluno4 = 6.5;
let idAluno5 = 'A005', notaAluno5 = 8.0;

somaNotas += notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4 + notaAluno5;

let mediaNotas = somaNotas / totalAlunos;

console.log("Códigos dos alunos com nota acima da média:");

if (notaAluno1 > mediaNotas) console.log("Código do aluno " + idAluno1);
if (notaAluno2 > mediaNotas) console.log("Código do aluno " + idAluno2);
if (notaAluno3 > mediaNotas) console.log("Código do aluno " + idAluno3);
if (notaAluno4 > mediaNotas) console.log("Código do aluno " + idAluno4);
if (notaAluno5 > mediaNotas) console.log("Código do aluno " + idAluno5);
