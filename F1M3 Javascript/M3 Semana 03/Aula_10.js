/* Problema:

Elabore um algoritmo para calcular o salário líquido de 5 pessoas.
Solicite ao usuário que digite seu nome e o valor de seu salário bruto.
Peça também, para o usuário digitar a quantidade de dependentes.
Para cada um dos dependentes deve ser solicitado o ganho mensal. Este valor deverá ser adicionado ao salário bruto.
Calcule a renda familiar per capta.
Caso a renda para cada membro da família seja menor que R$ 500, 00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será zero.
Caso a renda para cada membro da família seja maior ou igual a R$ 500, 00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:

salário bruto(de 0, 00 até 1.903, 98): 5 %
salário bruto(de 1.903, 99 até 2.826, 65): 7, 5 %
salário bruto(a partir de 2.826, 66): 15 %
Ao final, mostre na tela o valor do salário líquido.

Versão: 10 – Comando de Repetição Aninhados */

const prompt = require('prompt-sync')();

for (var i = 1; i <= 5; i++) {
    console.log("Pessoa ", i);
    var nome = prompt("Digite seu nome: ");
    var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
    var dependentes = parseInt(prompt("Digite o número de dependentes: "));

    for (var j = 1; j <= dependentes; j++) {
        var ganho = parseFloat(prompt("Digite o ganho mensal do dependente " + j + ": "));
        salario_bruto += ganho;
    }

    var renda_percapta = salario_bruto / (dependentes + 1);

    if (renda_percapta >= 500) {

        if (salario_bruto > 0 && salario_bruto <= 1903.98) {

            var ir = salario_bruto * 0.05;

        } else if (salario_bruto > 1903.98 && salario_bruto <= 2826.65) {

            var ir = salario_bruto * 0.075;

        } else if (salario_bruto > 2826.65) {

            var ir = salario_bruto * 0.15;
        }
    } else {
        var ir = 0;
    }

    var salario_liquido = salario_bruto - ir;

    console.log("Salário líquido: R$", salario_liquido, "\n");
}