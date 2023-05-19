const livros = require('./listaLivros')

function menorValor(arrProdutos, pocisaoInicial){
    let maisBarato = pocisaoInicial 

    for(let atual = pocisaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
     }
    }
    return maisBarato
}

module.exports = menorValor 