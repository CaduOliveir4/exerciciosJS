//Crie uma classe "ContaBancaria" com as propriedades titular da conta e saldo.
//Crie métodos para depositar e sacar dinheiro da conta bancária.
//Em seguida, crie uma classe "ContaCorrente" que herda de "ContaBancaria" e tem uma propriedade adicional para limite de cheque especial.
//Crie um método que permite o uso do limite de cheque especial para sacar dinheiro da conta.

class contaBancaria  {
    constructor (titular, saldo){
        this.titular = titular,
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        if (valor > this.saldo){
            console.log(`valor de saque é superior ao valor de saldo, por favor verificar valores!`)
        }else{
            this.saldo -= valor
            const saque = this.saldo
            console.log(`saque realizado com exito, valor restante em conta: ${saque}}`)
            
        }
    }
}
class ContaCorrente extends contaBancaria {
    constructor (titular, saldo, limite){
        super(titular, saldo)
        this.limite = limite
    }
    saqueComCheque(valor){
        if(valor > this.saldo){
            this.saldo -= valor 
            let limite = this.saldo
            console.log(`voce acabou de usar o limite especial para saque, o valor da sua conta após o uso é de ${limite}`)
        }else{
            console.log(`ERRO: não é nescessario usar o cheque especial para saque, valor de saque inferior ao de saldo!`)
        }
    }
}


//const victor = new contaBancaria('victtor',1700)
const victor = new ContaCorrente('victor',1500, 1000)

console.log(victor.saldo)
victor.saqueComCheque(1900)
console.log(victor.saldo)