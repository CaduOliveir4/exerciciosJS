export default class User {
    #nome
    #sobrenome
    #email
    #nacimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nacimento, role, ativo = true){
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nacimento = nacimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return `${this.#nome} ${this.sobrenome}`
    }

    get sobrenome(){
        return this.#sobrenome
    }

    get email(){
        return this.#email
    }

    get nacimento(){
        return this.#nacimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ''){
        throw new Error('Formato não valido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')

    this.#nome = nome 
    this.#sobrenome = sobrenome
    }
    
    exibirInfos(){
        return `${this.nome} ,${this.email}, ${this.nacimento}, ${this.role}, ${this.ativo}`
    }
   
}

// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '21-01-01')
// console.log(novoUser.nome)
// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome)
// console.log(novoUser.sobrenome)
