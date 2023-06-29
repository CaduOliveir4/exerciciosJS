import User from "./User.js";

export default class Admin extends User {
    constructor (nome, email, nacimento, role = 'admin', ativo = true){
        super(nome, email, nacimento, role, ativo)
    }

    criarCurso(nomeDoCurso,vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}
