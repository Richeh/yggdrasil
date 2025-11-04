const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// define user model

class User extends Model {};

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100]
        }
    }
}, { 
    sequelize, 
    defaultScope: {
        attributes: { exclude: ['password'] }
    },
    modelName: 'User',
    tableName: 'users',
    timestamps: true 
});

module.exports = User;