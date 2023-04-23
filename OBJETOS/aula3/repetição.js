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

for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if(tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}
}