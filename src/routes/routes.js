const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const schemaUsuario = require('../models/usuario');

router.get('/', (req, res) => {
    res.render('principal');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/sign_up', (req, res) => {
    res.render('sign_up');
});


router.get('/login2', (req, res) => {
    res.render('login2');
});

router.get('/poster', (req, res) => {
    res.render('poster');
});

router.get('/premieres', (req, res) => {
    res.render('premieres');
});

router.get('/toy', (req, res) => {
    res.render('toy');
});

router.get('/rapido', (req, res) => {
    res.render('rapido');
});

router.get('/spiderman', (req, res) => {
    res.render('spiderman');
});

router.get('/leon', (req, res) => {
    res.render('leon');
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
