const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Conexion con la BD Mongo
connection = mongoose.createConnection('mongodb://localhost/Cine', { useNewUrlParser: true })
    .then(db => console.log('Conectado a la BD Cine'))
    .catch(err => console.log('Problemas de conexion de bases de datos' + err));

//Configuracion de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configuracion de las rutas
const routes = require('./routes/routes');
app.use('/', routes);

//Iniciar servidor Express
app.listen(3000, () => {
    console.log('Servidor escuchando en :3000');
});