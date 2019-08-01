const mongoose = require('mongoose');

var schemaUsuario = mongoose.Schema({
    cedula: {
        type: String,
        required: "El numero de cedula es obligatorio",
        unique: true,
        trim: true,
        match: [/^[0123456789]{8,12}$/, "La cedula solo puede tener numeros"]
    },

    usuario: {
        type: String,
        trim: true,
        required: "El nombre de usuario es obligatorio",
        unique: true,
        match: [/^[a-z0-9_-]{4,16}$/, "El usuario solo puede tener letras y numeros"]
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
        match: [/^a-zA-z$/, "Por favor ingrese un correo electronico valido"],
        required: "El nombre es obligatorio",
    },

    apellidos: {
        type: String,
        match: [/^a-zA-z$/, "Por favor ingrese un correo electronico valido"],
        required: "Los apellidos son obligatorio",
    },


});

module.exports = mongoose.model('usuario', schemaUsuario);