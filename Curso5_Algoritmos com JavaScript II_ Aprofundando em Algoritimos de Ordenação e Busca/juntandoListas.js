//Importando arrays já ordenados
const { edGalho, edFolha} = require ('./listaLivros');

function juntarListas (lista1, lista2){
    
    //Inicializando variáveis
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    //Percorrendo e adicionando elementos em um Array
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }

        atual++;
    }

    //Conferindo se ambas as listas foram completamente percorridas
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }



    return listaFinal;
}

console.log(juntarListas(edGalho, edFolha));
