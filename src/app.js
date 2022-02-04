/**
 *File: app.js
 *Description: arquivo responsável por toda config e execução do app
 *Data: 30/01/2022
 *Author: João Mateus
 */
const express = require('express');

const app = express();

app.use(express.urlencoded( { extended:true } ) );
app.use(express.json());


module.exports = app;