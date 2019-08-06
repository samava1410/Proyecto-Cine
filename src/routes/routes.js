const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const schemaUsuario = require('../models/usuario');
const schemaReservas = require('../models/reservas');


router.get('/', (req, res) => {
    res.render('principal');
});

router.get('/reservations', async (req, res) => {


    res.render('reservations');
});

router.post('/reservations', async (req, res) => {
    const reserva1 = await schemaReservas.find();
    console.log(req.body.columnaPeli);
    const reserva = new schemaReservas(req.body);

    var flag = false;

    if (reserva1.length == 0) {
        console.log("Añadido EMPTY");
        await reserva.save();
        res.redirect('/');
    }

    else {
        for (var i = 0; i < reserva1.length; i++) {
            if (req.body.fila == reserva1[i].fila) {
                flag = true;
            }
        }

        if (flag) {
            console.log("NO");
            res.redirect('/reservations1');
        }
        else {
            console.log("Añadido NORMAL");
            await reserva.save();
            res.redirect('/reservations2');
        }
    }
});

router.get('/reservations1', (req, res) => {
    res.render('reservations1');
});
router.get('/reservations2', (req, res) => {
    res.render('reservations2');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/sign_up', (req, res) => {
    res.render('sign_up');
});


router.post('/login', async (req, res) => {
    const usuarios = await schemaUsuario.find();
    var flag = false;

    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario == req.body.usuario && usuarios[i].contrasena == req.body.contrasena) {
            flag = true;
        }
    }

    if (flag) {
        req.session.mail = req.body.email;
        res.redirect('/');
    }
    else {
        res.render('login', { "mensaje": "Contrasena o usuario invalido" });
    }
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

    req.body.cc = parseInt(req.body.cc);

    const usuario = new schemaUsuario(req.body);
    await usuario.save();

    res.redirect('/');

});

router.get('/login', (req, res) => {
    res.render('login2', {mensaje: ""} );
});

module.exports = router;
