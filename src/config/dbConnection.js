/**
 *File: dbConnection.js
 *Description: arquivo responsável pela conexão com a database
 *Data: 05/02/2022
 *Author: João Mateus
 */

const express = require('express');
const mongoose = require('mongoose');
const database = require('./dbSettings');

mongoose.Promisse = global.Promise;

//conexão

mongoose.connect(database.local.localDatabaseUrl,{
    //newUrlParser: true,
    useUnifiedTopology: true,
})
.then(
    () => {
        console.log('A base de dados foi conectada com sucesso');
},
(err) => {
    console.log(`Erro na conexão: ${err}`);
    process.exit();
});

