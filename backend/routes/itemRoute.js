const express = require('express');
const itemController = require('../controller/itemController');

const router = express.Router();

let ctrl = new itemController();

router.get('/listar', (req,res) =>{
    ctrl.listar(req, res);
});

router.post('/criar', (req,res) =>{
    ctrl.criar(req, res);
});

router.put('/alterar', (req,res) =>{
    ctrl.alterar(req, res);
});

router.delete('/excluir/:idItem', (req,res) =>{
    ctrl.excluir(req, res);
});

module.exports = router;