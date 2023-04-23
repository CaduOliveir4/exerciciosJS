const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numero = [...numerosImpares, ...numerosPares ] 

const [nun1, nun2, ...outrosNumeros] = [1,2,3,4,5,6,7,8,9]

const [nome1 = 'Juliana'] = []

const pessoa = {
    nome: 'Cadu',
    idade: 20
 }

const pessoaComTelefone = {
    ...pessoa, telefone: 1233123123
}

const {idade} = pessoa

console.log(idade)