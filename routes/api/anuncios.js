'use strict'

const express = require('express');
const router = express.Router();

const Anuncios = require('../../models/Anuncios');

router.get('/anuncios', (req, res, next) => {
    Anuncios.find().exec((err, docs) => {
      res.json(docs);
    });
  });