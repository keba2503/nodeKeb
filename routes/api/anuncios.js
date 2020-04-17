'use strict'

const express = require('express');
const router = express.Router();

const Anuncios = require('../../models/Anuncios');

router.get('/', (req, res, next) => {
    Anuncios.find().exec((err, docs) => {
      res.json(docs);
    });
  });

  module.exports = router;

  