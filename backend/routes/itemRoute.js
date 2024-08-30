const express = require('express');
const itemController = require('../controller/itemController');

const router = express.Router();

let ctrl = new itemController();

router.get('/listar', (req,res) =>{
    // #swagger.tags = ['Itens']
    // #swagger.summary = 'Lista os itens cadastrados'
    ctrl.listar(req, res);
});

router.post('/criar', (req,res) =>{
    // #swagger.tags = ['Itens']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/itens"
                    }  
                }
            }
        } 
    */
    ctrl.gravar(req, res);
});

router.put('/alterar', (req,res) =>{
    // #swagger.tags = ['Itens']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/itens"
                    }  
                }
            }
        } 
    */
    ctrl.alterar(req, res);
});

router.delete('/excluir/:idItem', (req,res) =>{
    // #swagger.tags = ['Itens']
    // #swagger.parameters['codigo'] = {description: 'Codigo do item a ser excluido'}
    ctrl.excluir(req, res);
});

module.exports = router;