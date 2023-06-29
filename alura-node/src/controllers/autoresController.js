import autores from "../models/Autor.js";

class AutorController{

    static listarAutores = async (req, res) => {
        try{
            const meuAutores = await autores.find()
            res.status(200).json(meuAutores)
        } catch(err){
        //lida com erro
        console.log(err)
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os autores'})
        }
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id

        autores.findById(id,(err, autores)=>{
            if(err){
                res.status(400).send({message: `${err.message} Id do Autor não localizada`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body)

        autor.save((err) =>{

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Autor.`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req,res) =>{
        const id = req.params.id

        autores.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: `Autor deletado com exito!`})
            }
        })
    }
    }

export default AutorController