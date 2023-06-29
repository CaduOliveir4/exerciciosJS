import User from "./User.js";

export default class Docente extends User{
    constructor (nome, email, nacimento, role = 'docente', ativo = true){
        super(nome, email, nacimento, role, ativo)
    }

    aprovaEstudande(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}
