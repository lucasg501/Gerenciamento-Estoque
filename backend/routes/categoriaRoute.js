const express = require('express');
const categoriaController = require('../controller/categoriaController');

let ctrl = new categoriaController();

const router = express.Router();

router.get('/listar', (req,res) =>{
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Lista as categorias cadastradas'
    ctrl.listar(req, res);
});

router.post('/criar', (req,res) =>{
    // #swagger.tags = ['Categoria']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/categoria"
                    }  
                }
            }
        } 
    */
    ctrl.criar(req, res);
});

router.put('/alterar', (req,res) =>{
    // #swagger.tags = ['Categoria']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/categoria"
                    }  
                }
            }
        } 
    */
    ctrl.alterar(req, res);
});

router.delete('/excluir/:idCat', (req,res) =>{
    // #swagger.tags = ['Categoria']
    // #swagger.parameters['codigo'] = {description: 'Codigo da categoria a ser excluida'}
    ctrl.excluir(req, res);
});

module.exports = router;