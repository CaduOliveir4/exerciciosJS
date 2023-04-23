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
    complemento: 'na frente do trigrão'
}]

cliente.endereco.push({
    rua: 'pedro martins ramos',
    numero: '456',
    apartamento: false
})

const listaApenasApartametos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartametos)