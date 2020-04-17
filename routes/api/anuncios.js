'use strict'

const express = require('express');
const router = express.Router();

const Anuncios = require('../../models/Anuncios');

router.get('/', async (req, res, next) => {
    try {
        const docs = await Anuncios.find();
        res.json(docs);
    } catch(err) {
        next(err);
    }
});

//Id search
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const anuncios = await Anuncios.findOne({ _id: _id });
        res.json({ result: anuncios });
    } catch (err) {
        next(err);
    }
});

  module.exports = router;

