const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const schemaUsuario = require('../models/usuario');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {

    console.log("Entro");

    //req.body.cc = parseInt(req.body.cc);

    const usuario = new schemaUsuario(req.body);
    console.log("esquema creado");
    await usuario.save();
    console.log("esquema GUARDADO");

    res.redirect('/',);

});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
