//1 - leitura dos valores
var precos = document.querySelectorAll(".produto_preco");

//2 - Soma dos valores ler o array, converterndo para float todos elementos do Array
var resultado = 0;

for (var i = 0; i < precos.length; i++) {
    resultado += parseFloat(precos[i].innerText);
}

//3 - imprimir no html depois <hr> o valor da soma innerHTML
var total = document.getElementById("total");
total.innerHTML = `Total: R$ ${resultado}`;