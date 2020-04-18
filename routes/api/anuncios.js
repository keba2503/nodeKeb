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


//POST
router.post('/', async (req, res, next) => {
  try {
    const anunciosData = req.body;
    console.log(req.body);
    //create
    const anuncios = new Anuncios(anunciosData);
    //save
    const anunciosSave = await anuncios.save();
    res.status(201).json({ result: anunciosSave });
  } catch (err) {
    next(err);
  }
});

//PUT
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const anunciosData = req.body;
    const anunciosSave = await Anuncios.findOneAndUpdate({ _id: _id }, anunciosData, {
      new: true,
      useFindAndModify: false,
    });
    res.json({ resul: anunciosSave });
  } catch (err) {
    next(err);
  }
});

//Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Anuncios.deleteOne({ _id: _id });
    res.json();
  } catch (err) {
    next(err)
  }
});

  module.exports = router;

