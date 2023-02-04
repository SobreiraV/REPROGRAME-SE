var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let animalSelect = document.getElementById("select_animais");

// Selecionar elemento 'container' ( 1 ponto)
let container = document.getElementById("container");

// Selecionar elemento 'nome' ( 1 ponto)
let p = document.getElementById("nome");

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
animalSelect.addEventListener("input", function () {
    if (animalSelect.value == "dog") {
        listarAnimais(cachorros);
    } else if (animalSelect.value == "cat") {
        listarAnimais(gatos);
    }
});

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener("mouseover", mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener("mouseout", limparNome);

function listarAnimais(tipo) { // Implementação da função (10 pontos)
    limparDivContainer();
    for (let i = 0; i < tipo.length; i++) {
        let img = document.createElement("img");
        img.src = "./img/" + tipo[i].imagem + ".jpg";
        img.alt = tipo[i].nome;
        container.appendChild(img);
    }
    // Criar elementos do tipo <img src=./img/....
    // Fazer com que os elementos img sejam filhos do elemento 'container'
}

function mostrarNome(e) { // Implementação da função (4 pontos)
    p.innerText = e.target.alt;
}

function limparNome() {
    p.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
    var elemento = document.querySelector("#container");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}