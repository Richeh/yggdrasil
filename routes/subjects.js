const express = require('express');
const router = express.Router();
const { Subject } = require('../models');
const { DataTypes, Model, Sequelize } = require('sequelize');

router.get('/subjects/', async (req, res) => {
    res.json( await Subject.findAll());
});

router.get('/subjects/:id', async (req, res) => {
    res.json(await Subject.findByPk(req.params.id));
});

router.post('/subjects', async (req, res) => {
    res.json(await Subject.create(req.body));
});

router.put('/subjects/:id', async (req, res) => {
    const subject = await Subject.findByPk(req.params.id);
    if(subject) {
        subject.update(req.body);
        res.status(200).json(subject);
    } else {
        res.status(404).send('Subject not found');
    }
});

router.delete('/subjects/:id', async (req, res) => {
    const subject = await Subject.findByPk(req.params.id);
    if(subject) {
        subject.destroy();
        res.status(200).json({message: 'Subject deleted'});
    } else {
        res.status(404).send('Subject not found');
    }
});

module.exports = router;