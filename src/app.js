/**
 *File: app.js
 *Description: arquivo responsável por toda config e execução do app
 *Data: 30/01/2022
 *Author: João Mateus
*/
const express = require('express');
const index = require('./routes/index');
const view = require('./routes/userView')
const connection = require('./config/dbConnection');

const app = express();

app.use(express.urlencoded( { extended:true } ) );
app.use(express.json());

app.set('view engine', 'ejs');
app.set('connection', connection);

app.use(index)
app.use('/back/v1', index);
app.use('/back/v1', view);


module.exports = app;