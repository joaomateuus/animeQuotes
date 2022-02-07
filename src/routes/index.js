/**
 *File: index.js
 *Description: arquivo responsável por execução a rota default
 *Data: 05/02/2022
 *Author: João Mateus
*/
const express = require('express');
const router = express.Router();

router.get('/back/v1', (req, res)=>{
    res.status(200).send({
        sucess: true,
        message: 'Seja bem vindo ao nosso server node.js',
        version: '1.0.0',
    });
});

module.exports = router;

