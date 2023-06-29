import livros from "../models/Livro.js";

class livroController{

    static listarLivros = async (req, res) => {
        try{
            const meuLivros = await livros.find()
            .populate('autor')
            res.status(200).json(meuLivros)
        } catch(err){
        //lida com erro
        console.log(err)
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os livros'})
        }
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros)=>{
            if(err){
                res.status(400).send({message: `${err.message} Id do livro não localizada`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body)

        livro.save((err) =>{

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) =>{
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req,res) =>{
        const id = req.params.id

        livros.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: `Livro deletado com exito!`})
            }
        })
    }

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros)=>{
            res.status(200).send(livros)
        })
    }

    }


export default livroController