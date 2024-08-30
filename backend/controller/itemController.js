const ItemModel = require('../model/itemModel');

class ItemController{

    gravar(req,res){
        if(Object.keys(req.body).length > 0){
            let itemModel = new ItemModel();

            itemModel.idItem = 0;
            itemModel.nomeItem = req.body.nomeItem;
            itemModel.quantidade = req.body.quantidade;
            itemModel.valorCompra = req.body.valorCompra;
            itemModel.valorVenda = req.body.valorVenda;
            itemModel.idCategoria = req.body.idCategoria;
            
            let ok = itemModel.gravar();
            if(ok){
                res.status(200).json({msg: "Item gravado com Sucesso"});
            }else{
                res.status(500).json({msg: "Erro ao gravar"});
            }
        }else{
            res.status(400).json({msg: "Parâmetros Inválidos"});
        }
    }


    async alterar(req,res){
        if(Object.keys(req.body).length > 0){
            let itemModel = new ItemModel();
            itemModel.idItem = req.body.idItem;
            itemModel.nomeItem = req.body.nomeItem;
            itemModel.quantidade = req.body.quantidade;
            itemModel.valorCompra = req.body.valorCompra;
            itemModel.valorVenda = req.body.valorVenda;
            itemModel.idCategoria = req.body.idCategoria;
            let ok = itemModel.gravar();
            if(ok){
                res.status(200).json({msg: "Item alterado com Sucesso"});
            }else{
                res.status(500).json({msg: "Erro ao alterar"});
            }
        }else{
            res.status(400).json({msg: "Parâmetros Inválidos"});
        }
    }

    async listar(req,res){
        let itemModel = new ItemModel();
        let lista = await itemModel.listar();
        let listaRetorno = [];
        for(let i=0; i<lista.length; i++){
            listaRetorno.push(lista[i].toJSON());
        }
        res.status(200).json(listaRetorno);
    }


    async excluir(req,res){
        try{
            if(req.params.idItem != null){
                let itemModel = new ItemModel();
                let ok = itemModel.excluir(req.params.idItem);
                if(ok){
                    res.status(200).json({msg: "Item excluído com Sucesso"});
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

module.exports = ItemController;