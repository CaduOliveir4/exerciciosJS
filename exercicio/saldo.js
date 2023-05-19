//Crie uma classe chamada "Conta" com as propriedades "número da conta" e "saldo".
// Em seguida, crie um método "sacar" que recebe um valor e subtrai do saldo, desde que haja saldo suficiente. 
//Crie também um método "depositar" que recebe um valor e adiciona ao saldo.

class conta {
    constructor (conta, numeroConta, saldo){
        this.conta = conta,
        this.numeroConta = numeroConta,
        this.saldo = saldo
    }
    depositar(valor){
        let aumentoDeConta = valor += this.saldo
        console.log(`seu valor antes do deposito éra ${this.saldo} e seu saldo atualizado é ${aumentoDeConta}`)
    }
    sacar(valor){
        if (this.saldo >= valor){
           let valorSacado = valor -= this.saldo
            console.log(`Valor antes do saque: ${this.saldo}|| Valor pós saque: ${valorSacado}`)
        }else{
            console.log('Valor de saque exedente, por favor revisar o valor')
        }
    }
    valorDaConta(){
        console.log(`Conta: ${this.conta} Numero da Conta: ${this.numeroConta} Valor da conta: ${this.saldo} `)
    }
}

const cadu = new conta('santander',088, 100) 

cadu.depositar(50)
cadu.sacar(100)
cadu.valorDaConta()