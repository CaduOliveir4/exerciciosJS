const nomes = ['Evaldo','Mary','Camis','Cadu']

/*nomes.forEach(function (nome){
    console.log(nome)
})

nomes.forEach((nome)=>{
    console.log(nome)
}) para melhor formatação usar => substitui a função    --*/

function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome)

//função callback é criar uma função fora do escopo para poder reutilizala mais vezes melhorando a formatação do codigo 