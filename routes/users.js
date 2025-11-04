const express = require('express');
const router = express.Router();
const { DataTypes, Model, Sequelize } = require('sequelize');

//Setup database model

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Sync models with database

sequelize.sync();

// define user model

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, { sequelize, modelName: 'user'});


router.get('/users/', async (req, res) => {
    res.json( await User.findAll());
});

router.get('/users/:id', async (req, res) => {
    res.json(await User.findByPk(req.params.id));
});

router.post('/users', async (req, res) => {
    res.json(await User.create(req.body));
});

router.put('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if(user) {
        user.update(req.body);
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if(user) {
        user.destroy();
        res.status(200).json({message: 'User deleted'});
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;