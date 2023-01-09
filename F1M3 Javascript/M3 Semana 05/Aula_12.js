/* Problema:

Elabore um algoritmo para calcular o salário líquido de 5 pessoas.
Solicite ao usuário que digite seu nome e o valor de seu salário bruto.
Peça também, para o usuário digitar a quantidade de dependentes.
Para cada um dos dependentes deve ser solicitado o ganho mensal. Este valor deverá ser adicionado ao salário bruto.
Calcule a renda familiar per capta.
Caso a renda para cada membro da família seja menor que R$ 500, 00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será zero.
Caso a renda para cada membro da família seja maior ou igual a R$ 500, 00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:

salário bruto (de 0,00 até 1.903,98): 5%
salário bruto (de 1.903,99 até 2.826,65): 7,5%
salário bruto (a partir de 2.826,66): 15% Ao final, mostre na tela o valor do salário líquido.

Armazene os salários líquidos em uma coleção indexada (array).

Depois, calcule a média de todos os salários líquidos. Posteriormente, mostre a média dos salários líquidos e quantas pessoas estão abaixo desse valor médio.

Refatore seu código. Para isso, crie 2 funções, a saber:

função para calcular o IR: esta função deve receber como parâmetros o salário bruto e a renda per capta, e, retornar ao final o valor do IR;
função para calcular a quantidade de salários líquidos menores que a média: esta função deve receber como parâmetros o array de salários líquidos e a média dos salários líquidos, e, retornar a quantidade de salários líquidos menores que a média;
Versão: 12 – Funções */

const prompt = require('prompt-sync')();

var salarios = [];
var soma = 0;
var media;
var qtd_menores;

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

    
    var ir = calcular_ir(salario_bruto, renda_percapta)
    var salario_liquido = salario_bruto - ir;

    console.log("Salário líquido: R$", salario_liquido, "\n");

    salarios.push(salario_liquido);
    soma = soma + salario_liquido;
}

media = soma / salarios.length;

qtd_menores = calcular_qtd_menores(salarios, media);

console.log("A média dos salários líquidos é: ", media);
console.log("A quantidade de pessoas com salário líquido abaixo da média é: ", qtd_menores);

function calcular_ir(salario_bruto, renda_percapta) {
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
    return ir;
}

function calcular_qtd_menores(salarios, media){
    var qtd_menores = 0;
    for (var i = 0; i < salarios.length; i++) {
        if (salarios[i] < media) {
            qtd_menores++;
        }
    }
    return qtd_menores;
}