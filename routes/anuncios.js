'use strict';

const Anuncios = require('../models/Anuncios');

router.get('/anuncios', (req, res, next) => {
  Anuncios.find().exec((err, docs) => {
    res.json(docs);
  });
});
