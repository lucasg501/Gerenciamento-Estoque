const CategoriaModel = require('../model/categoriaModel');

class CategoriaController{
    gravar(req,res){
        if(Object.keys(req.body).length == 0){
            let categoriaModel = new CategoriaModel();

            categoriaModel.idCat = 0;
            categoriaModel.nomeCat = req.body.nomeCat;
            let ok = categoriaModel.gravar();
            if(ok){
                res.status(200).json({msg: "Categoria gravada com Sucesso"});
            }else{
                res.status(500).json({msg: "Erro ao Gravar"});
            }
        }else{
            res.status(400).json({msg: "Parâmetros Inválidos"});
        }
    }

    async alterar(req,res){
        if(Object.keys(req.body).length == 0){
            let categoriaModel = new CategoriaModel();

            categoriaModel.idCat = req.body.idCat;
            categoriaModel.nomeCat = req.body.nomeCat;
            let ok = categoriaModel.gravar();
            if(ok){
                res.status(200).json({msg: "Categoria alterada com Sucesso"});
            }else{
                res.status(500).json({msg: "Erro ao alterar"});
            }
        }else{
            res.status(400).json({msg: "Parâmetros Inválidos"});
        }
    }


    async listar(req,res){
        let categoriaModel = new CategoriaModel();
        let lista = await categoriaModel.listar();
        let listaRetorno = [];
        for(let i=0; i<lista.length; i++){
            listaRetorno.push(lista[i].toJSON());
        }
        res.status(200).json(listaRetorno);
    }


    async excluir(req,res){
        try{
            if(req.params.idCat != null){
                let categoriaModel = new CategoriaModel();
                let ok = categoriaModel.excluir(req.params.idCat);
                if(ok){
                    res.status(200).json({msg: "Categoria excluída com Sucesso"});
                }else{
                    res.status(500).json({msg: "Erro ao excluir"});
                }
            }else{
                res.status(400).json({msg: "Parâmetros Inválidos"});
            }
        }catch(e){
            res.status(500).json({msg: e.message});
        }
    }

    
}

module.exports = CategoriaController;