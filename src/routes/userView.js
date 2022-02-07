/**
 *File: userView.js
 *Description: arquivo por renderizar a view
 *Data: 30/01/2022
 *Author: João Mateus
 */
 const express = require('express');
 const router = express.Router();

router.get('/home',(req, res)=>{
    res.render('../src/view/index.ejs');
})

module.exports = router;
