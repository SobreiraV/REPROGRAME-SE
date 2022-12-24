/* Problema:

Elabore um algoritmo para calcular o salário líquido de uma pessoas.
Solicite ao usuário que digite seu nome e o valor de seu salário bruto.
O imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:

salário bruto(de 0, 00 até 1.903, 98): 5 %
salário bruto(de 1.903, 99 até 2.826, 65): 7, 5 %
salário bruto(a partir de 2.826, 66): 15 %

Ao final, mostre na tela o valor do salário líquido.

Versão> 07 - Comandos de Decisão*/

const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));

if (salario_bruto > 0 && salario_bruto <= 1903.98){

    var ir = salario_bruto * 0.05;

} else if (salario_bruto > 1903.98 && salario_bruto <= 2826.65){
    
        var ir = salario_bruto * 0.075;
    
} else if (salario_bruto > 2826.65){
        
            var ir = salario_bruto * 0.15;
}


var salario_liquido = salario_bruto - ir;

console.log("Salário líquido: R$", salario_liquido);