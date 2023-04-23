const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11972264986', '1156055405']
}

cliente.endereco = [{
    rua: 'R.Francisca felix silva',
    numero: 634,
    apartamento: true,
    complemento: 'na frente do tigrão'
}]

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log (`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)

const encomenda ={
    destinatario: 'Sergio',
    endereco: cliente.endereco[0]
}

console.log(encomenda)