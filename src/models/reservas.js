const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaReservas = new Schema({
    pelicula: {
        type: String,
        trim: true
        
    },

    funcion: {
        type: String,
        trim: true,
    },

    fila: {
        type: String,
        trim: true,
        
    },

    columna: {
        type: String,
        trim: true,
        
    },

    codigo: {
        type: String,
        trim: true,
    },

    sala: {
        type: String,
        trim: true,
    }

});

module.exports = mongoose.model('reservas', schemaReservas);