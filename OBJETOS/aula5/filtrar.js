const clientes = require('./clientes.json')

function filtrarApartametoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento 
            && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const filtrados = filtrarApartametoSemComplemento(clientes)

console.log(filtrados)