//Crie um objeto chamado "funcionario" com as seguintes propriedades: 
//nome, cargo e salário. Em seguida, crie um método dentro do objeto que aumenta o salário em 10%.

class funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo,
        this.salario = salario
    }
    valorDeAumento(){
        let aumento = this.salario * 1.1
        console.log(aumento.toFixed(2))
    }

}

const jose = new funcionario('jose', 'Operador de Caixa', 1500)


console.log(jose.salario)
jose.valorDeAumento()
console.log(jose.salario)

