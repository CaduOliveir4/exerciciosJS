//Crie uma classe chamada "Retângulo" com as propriedades "largura" e "altura".
//Em seguida, crie um método que calcule a área do retângulo (largura x altura) 
//e outro método que calcule o perímetro (2 x largura + 2 x altura).

class retangulo {
    constructor(largura, altura){
        this.largura = largura,
        this.altura = altura
    }
    calculaArea(){
        let area = this.altura * this.largura
        return area
    }
    cauculaPerimetro(){
        let perimetro = (2 * this.altura) + (2 * this.largura)
        return perimetro
    }
    exibeTela(){
        if (this.altura <= 0 && this.largura <= 0){
            console.log(`LARGURA: ${this.largura} ALTURA: ${this.altura} AREA: ${this.calculaArea()} PERIMETRO:${this.cauculaPerimetro()}`)
        }else{
            console.log('por favor verificar parametros passados, valores incorretos')
        }
    }
}


const retanguloQuadrado = new retangulo(0,5)

retanguloQuadrado.exibeTela()