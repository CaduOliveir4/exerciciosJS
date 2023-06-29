class User {
    constructor(nome, sobrenome, email, nacimento, role, ativo = true){
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nacimento = nacimento
        this.#role = role
        this.#ativo = ativo
    }

    set #nome(novoNome){

    }

}