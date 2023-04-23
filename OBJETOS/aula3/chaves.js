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

const chavesDoObjeto = Object.keys(cliente)

if (!chavesDoObjeto.includes('endereco')){
    console.error('Erro é nescessario ter um endereço cadastrado')
}
console.log(chavesDoObjeto)