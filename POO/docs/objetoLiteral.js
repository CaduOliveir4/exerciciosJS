const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nacimento: '2001/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin ={
    nome: 'mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso(){
        console.log('Curso criado!')
    }
    
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()