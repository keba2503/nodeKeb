'use strict'

const mongoose = require('mongoose');

//schematic creation
//https://mongoosejs.com/docs/schematypes.html
const anuncioSchema = mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    sale: { type: Boolean },
    tags: {type: [String]}
});

//Models creation
const Anuncios = mongoose.model('Anuncio', anuncioSchema);

//Export
module.exports = Anuncios;