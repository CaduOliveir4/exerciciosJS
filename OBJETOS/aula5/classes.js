//const Livro = function(nome, editora, paginas){
//  gNome = nome,
//    gEditora = editora,
//    gPaginas = paginas
//
//    this.getNome = function(){
//       return gNome
//    }
//    this.getEditora = function(){
//        return gEditora
//    }
//    this.getPaginas = function(){
//        return gPaginas
//    }
//}

// const Loma = new Livro('Loma proteção veicular', 'SupDebora', 117)

//console.log(Loma.getNome())
//console.log(Loma.getEditora())
//console.log(Loma.getPaginas())

//const nome = 'Alura'

//////////////////////

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas}`)
    }
}

const NodeJs = new Livro ('Primeiros passos com nodeJs', 'Casa do codigo', 195)

const barbaAzul = new Livro ('O barba Azul', 'Casa do livro', 897)

NodeJs.anunciarTitulo()
NodeJs.descreverTitulo()

