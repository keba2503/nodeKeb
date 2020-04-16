'use strict'

const mongoose = require('mongoose');

//schematic creation
//https://mongoosejs.com/docs/schematypes.html
const anuncioSchema = mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    sale: { type: Boolean },

});

//Models creation
const Anuncios = mongoose.model('Anuncio', anuncioSchema);

//Export
module.exports = Anuncios;