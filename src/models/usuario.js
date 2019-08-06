const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaUsuarios = new Schema({
    cc: {
        type: String,
        required: "El numero de cedula es obligatorio",
        unique: true,
        trim: true,
        match: [/^[0123456789]{8,12}$/, "La cedula solo puede tener numeros"],
        validate: [
            function (input) {
                return input.length <= 12 || input.length >= 8;
            },
            "La cedula debe contener entre 8 y 12 digitos."
        ]
    },

    usuario: {
        type: String,
        trim: true,
        required: "El nombre de usuario es obligatorio",
        unique: true,
        match: [/^[a-z0-9_-]{6,20}$/, "El usuario solo puede tener caracteres alfanumericos"]
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Por favor ingrese un correo electronico valido"],
        required: "El correo electronico es obligatorio"
    },

    contrasena: {
        type: String,
        trim: true,
        required: "La contrasena es obligatoria",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "La contraseña debe contener mas de 6 caracteres."
        ]
    },

    nombres: {
        type: String,
        match: [/^[a-zA-Z]+$/, "Los nombres solo pueden tener caracteres alfabeticos"],
        required: "El nombre es obligatorio",
    },

    apellidos: {
        type: String,
        match: [/^[a-zA-Z]+$/, "Los apellidos solo pueden tener caracteres alfabeticos"],
        required: "Los apellidos son obligatorios",
    }

});

module.exports = mongoose.model('usuario', schemaUsuarios);