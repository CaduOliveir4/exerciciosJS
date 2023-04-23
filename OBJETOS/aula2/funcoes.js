const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11972264986', '1156055405'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.saldo){
            console.log('saldo insuficiente')
        }
        else{
            this.saldo -= valor
            console.log(`pagamento realizado, novo saldo:${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento()