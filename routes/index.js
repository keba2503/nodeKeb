'use strict';

var express = require('express');
var router = express.Router();
const Anuncios = require('../models/Anuncios');

router.get('/anuncios', (req, res, next) => {
  Anuncios.find().exec((err, docs) => {
    res.json(docs);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
