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
    const reserva = new schemaReservas(req.body);

    var precio;

    if(reserva.codigo != ''){
        if(reserva.hora =='09:00 AM' || reserva.hora == '11:00 AM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $4000';
            console.log(precio);
        }
        else if(reserva.hora == '03:00 PM'|| reserva.hora =='06:00 PM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $5600';
            console.log(precio);
        }
        else if (reserva.hora == '09:00 PM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $7200';
            console.log(precio);
        }
    
    }
    else{
        if(reserva.hora =='09:00 AM' || reserva.hora == '11:00 AM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $5000';
            console.log(precio);
        }
        else if(reserva.hora == '03:00 PM'|| reserva.hora =='06:00 PM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $7000';
            console.log(precio);
        }
        else if (reserva.hora == '09:00 PM'){
            precio = 'la función de ' + reserva.hora + ' tiene un precio de $9000';
            console.log(precio);
        }
    
    }
    
    
    
    

    var flag = false;

    if (reserva1.length == 0) {
        await reserva.save();
        res.redirect('/reservations2');
    }


    else {
        for (var i = 0; i < reserva1.length; i++) {

            if (reserva.fila == reserva1[i].fila && reserva.sala == reserva1[i].sala
                && reserva.pelicula == reserva1[i].pelicula && reserva.columnaPeli == reserva1[i].columnaPeli
                && String(reserva.fecha) == String(reserva1[i].fecha) && reserva.hora == reserva1[i].hora) {
                    console.log("ENTRO A LA VALIDACION")
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

    res.redirect('/');

});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
