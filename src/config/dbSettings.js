/**
 *File: dbSettings.js
 *Description: arquivo responsável por toda config da conexão com database
 *Data: 05/02/2022
 *Author: João Mateus
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    local: {
        localDatabaseUrl: process.env.DB_URI,
        secret: 'password'
    }
};


