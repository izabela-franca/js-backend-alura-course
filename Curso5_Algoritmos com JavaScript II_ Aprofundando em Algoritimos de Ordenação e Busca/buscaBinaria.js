const listaLivros = require("./listaLivros3");


function buscar (array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return -1;
    };

    if (valorBuscado === atual.preco) {
        return meio;
    };

    if (valorBuscado < atual.preco) {
        return buscar(array, de, meio -1, valorBuscado);
    };

    if (valorBuscado > atual.preco) {
        return buscar(array, meio + 1, ate, valorBuscado)
    };
}

console.log(buscar(listaLivros, 0, listaLivros.length - 1, 40));